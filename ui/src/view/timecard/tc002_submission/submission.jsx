import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Dialog from '@mui/material/Dialog';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Paper from '@mui/material/Paper';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';


// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// tc001に書き込む内容
{/* <div>
<Tc002 empId ={UserDate.employee_id} setOpen={setOpen} open={open}/>
</div> */}
///////////

function LeaveRequest(props) {
  const {open,setOpen,empId } = props
//   const baseURL = "http://localhost:8000";
  const baseURL = process.env.REACT_APP_IP_PORT
  const [InfoDate, setInfoDate] = useState();
  const [YMD, setYMD] = useState(new Date());
  const [LeaveRemainDate, setLeaveRemainDate] = useState([]);
  const [LeaveRequestDate, setLeaveRequestDate] = useState([]);
  const [LeaveRequestLabel, setLeaveRequestLabel] = useState([]);
//   const [open, setOpen] = useState(true);
  const dayOfWeekStrJP = [" (日)", " (月)", " (火)", " (水)", " (木)", " (金)", " (土)"];
  const submStList = [" 申請中", " 許可", " 却下"];

  const [OpenGet, setOpenGet] = React.useState(false);
  const [OpenDel, setOpenDel] = React.useState(false);

  const handleCloseAlert = () => {
      setOpenGet(false);
      setOpenDel(false);
  };

  //リクエストをDBへ投げる
  const putRequest = () => {
    console.log(InfoDate)
    axios.post(baseURL + "/tc002_03/", {
      employee_id: empId,
      target_date: InfoDate
    }).then((res) => {
        setTimeout(() => {
            GetLeaveRequestDate()
      }, 100);
    })
    setOpenGet(false);
  };

  const delRequest = () => {
    console.log(InfoDate)
    axios.put(baseURL + "/tc002_04/", {
        employee_id: empId,
        target_date: InfoDate
    }).then((res) => {
        if (res.data == 1){
            axios.put(baseURL + "/leave_plus/", {
                employee_id: empId
        })}
        setTimeout(() => {
            GetLeaveRequestDate()
            GetLeaveRemainDate()
      }, 100);
    })
    setOpenDel(false);
  };

  //残有給日数の取得
  const GetLeaveRemainDate = () => {
    let param = '/tc002_01/?employee_id=' + empId
    // let param = '/tc002_01/?employee_id=' + 1
    axios.get(baseURL + param).then(res => {
        setLeaveRemainDate(res.data)
    })
  }

  const getYMD = (valueDate) => {
    setYMD(valueDate)
  }

  useEffect(() => {
        GetLeaveRemainDate()
        GetLeaveRequestDate()
  }, [YMD]);
    
  const GetLeaveRequestDate = () => {
    let targetYear = new Date(YMD.startStr).getFullYear()
    let targetMonth = new Date(YMD.startStr).getMonth() + 1
    let targetDate = new Date(YMD.startStr).getDate()
    if (targetDate != 1){
        if (targetMonth == 12){
            targetYear = targetYear + 1
            targetMonth = 1
            targetDate = 1
        }else{
            targetMonth = targetMonth + 1
            targetDate = 1
        }
    }else{
        targetDate = 1
    }
    console.log(targetYear, targetMonth, targetDate)
    let paramDate = '/tc002_02/?employee_id=' + empId +'&YYYY=' + targetYear +'&MM=' + targetMonth
    // let paramDate = '/tc002_02/?employee_id=' + 1 +'&YYYY=' + targetYear +'&MM=' + targetMonth
    axios.get(baseURL + paramDate).then(res => {
        setLeaveRequestDate(res.data)
        console.log(LeaveRequestDate)
    })
    let paramLabel = '/tc002_05/?employee_id=' + empId +'&YYYY=' + targetYear +'&MM=' + targetMonth
    // let paramLabel = '/tc002_05/?employee_id=' + 1 +'&YYYY=' + targetYear +'&MM=' + targetMonth
    axios.get(baseURL + paramLabel).then(res => {
        setLeaveRequestLabel(res.data)
        console.log(LeaveRequestLabel)
    })
  }

  const ExistRequest = (value) =>{
    setInfoDate(value.dateStr);
    const checkRequest = LeaveRequestLabel.filter((data, index) => {
      return data.start == value.dateStr;
    });
    if (checkRequest.length == 1){
        setOpenDel(true);
    }else{
        setOpenGet(true);
    }
    console.log(value.dateStr)
  }

  const handleClose = () => {
      setOpen(false);
  };
    return (
        <>
          <div>
              <Dialog
                  fullScreen
                  open={open}
                  onClose={handleClose}
              >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <ArrowBackIosIcon />戻る
                        </IconButton>
                    </Toolbar>
                </AppBar>
                  <table>
                      <tr>
                          <td style={{ width: "80%" }}>
                              <FullCalendar
                                  plugins={[dayGridPlugin, interactionPlugin]}
                                  contentHeight="auto"
                                  locale="ja"
                                  selectable="true"
                                  // 取得データを配列に挿入
                                  events={LeaveRequestLabel}
                                  // 日付クリック動作
                                  dateClick={(value) => ExistRequest(value) }
                                  // 前へ　次へを押下時にgetリクエストの送信
                                  datesSet={(valueDate) => getYMD(valueDate)}
                              />
                          </td>
                          <td style={{ width: "20%" }}>
                                <div>有給休暇残日数：{LeaveRemainDate.remain_day}日</div>
                              <TableContainer component={Paper}>
                                  <Table aria-label="spanning table">
                                      <TableHead>
                                          <TableRow>
                                                <TableCell align="">有給休暇予定日</TableCell>
                                                <TableCell align="">申請状態</TableCell>
                                          </TableRow>
                                      </TableHead>
                                      <TableBody>
                                          {LeaveRequestDate.map((request) => (
                                              <TableRow>
                                                <TableCell>{dayjs(request.target_date).format("M月D日") + dayOfWeekStrJP[dayjs(request.target_date).format("d")]}</TableCell>
                                                <TableCell>{submStList[request.subm_st]}</TableCell>
                                              </TableRow>
                                          ))}
                                      </TableBody>
                                  </Table>
                              </TableContainer>

                          </td>
                      </tr>
                  </table>
                  <div>
                        <Dialog
                            open={OpenGet}
                            onClose={handleCloseAlert}
                            aria-labelledby="get-dialog-title"
                            aria-describedby="get-dialog-description"
                        >
                            <DialogTitle id="get-dialog-title">
                                {"有給休暇申請"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="get-dialog-description">
                                    {dayjs(InfoDate).format("M月D日") + dayOfWeekStrJP[dayjs(InfoDate).format("d")]}を有給休暇として申請しますか？
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Stack direction="row" spacing={1}>
                                    <Chip label="いいえ" onClick={handleCloseAlert} />
                                    <Chip label="はい" onClick={putRequest} />
                                </Stack>
                            </DialogActions>
                        </Dialog>
                  </div>
                  <div>
                        <Dialog
                            open={OpenDel}
                            onClose={handleCloseAlert}
                            aria-labelledby="del-dialog-title"
                            aria-describedby="del-dialog-description"
                        >
                            <DialogTitle id="del-dialog-title">
                                {"有給休暇申請取り下げ"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="del-dialog-description">
                                    {dayjs(InfoDate).format("M月D日") + dayOfWeekStrJP[dayjs(InfoDate).format("d")]}の有給休暇の申請を取り下げしますか？
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Stack direction="row" spacing={1}>
                                    <Chip label="いいえ" onClick={handleCloseAlert} />
                                    <Chip label="はい" onClick={delRequest} />
                                </Stack>
                            </DialogActions>
                        </Dialog>
                  </div>
              </Dialog>
          </div>
      </>
  );
}
export default LeaveRequest;
