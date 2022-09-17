import * as React from 'react';
import { useRef, useEffect, useState, useImperativeHandle, forwardRef } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AlertDialog = (props, ref) => {
  const {dialog,message,setResultMessage} = props;
  const [open, setOpen] = useState(false);
  const renderFlgRef = useRef(false)

  // エラーコード,title,message
  // const ErrorMessage = {['ad00-e001','未入力エラー','値が未入力です。'],
  //                       ['ad00-e001','存在チェックエラー','指定のデータが見つかりません。'],
  //                       ['ad00-e001','文字数エラー','文字数は20文字以下にしてください。'],
  //                       ['ad01-e001','ネットワークエラー','ネットワーク障害が発生しました。管理者に問い合わせてください。']
  //                      }

  // const InfoMessage = {['ad00-i001','データ追加','データの追加が完了しました。'], 
  //                      ['ad00-i001','データ更新','データが更新されました。'],
  //                      ['ad00-i001','データ削除','データが削除されました。'],
  //                      ['ad01-i001','ログイン','ログインが完了しました。'],
  //                      ['ad01-i001','ログアウト','ログアウトが完了しました。']
  //                     }

  // const QuestionMessage = {['ad00-q001','作成','データを追加してもよろしいですか？'], 
  //                          ['ad00-q001','更新','データを更新してもよろしいですか？'],
  //                          ['ad00-q001','削除','データを削除してもよろしいですか？'],
  //                          ['ad01-q001','死の宣告','本当によろしいですか？']
  //                         }

  useEffect(() => {
    if(renderFlgRef.current) {
        setOpen(true)
      } else {
        renderFlgRef.current = true
      }
  },[dialog])
  
  const handleClose = (res) => {
    setResultMessage({result:res})
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {message.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {message.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose('OK')}>OK</Button>
          {(() => {
        if (message.type === 2) {
          return <Button onClick={() => handleClose('NG')} autoFocus>キャンセル</Button>;
        }
      })()}
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default forwardRef(AlertDialog)
