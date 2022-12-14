import React from 'react'
import { useState, useImperativeHandle, forwardRef } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AlertDialog = (props, ref) => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [flg, setFlg] = useState(false);
    const [cancelFlg,setCancelFlg] = useState(false);

    // エラーコード,title,message
  const ErrorMessage = [{id:'ad000-e001',title:'未入力エラー',message:'値が未入力です。'},
                        {id:'ad000-e001',title:'存在チェックエラー',message:'指定のデータが見つかりません。'},
                        {id:'ad000-e001',title:'文字数エラー',message:'文字数は20文字以下にしてください。'},
                        {id:'ad001-e001',title:'ネットワークエラー',message:'ネットワーク障害が発生しました。管理者に問い合わせてください。'}
                        ]

  const InfoMessage = [{id:'ad000-i001',title:'データ追加',message:'データの追加が完了しました。'}, 
                       {id:'ad000-i001',title:'データ更新',message:'データが更新されました。'},
                       {id:'ad000-i001',title:'データ削除',message:'データが削除されました。'},
                       {id:'ad001-i001',title:'ログイン',message:'ログインが完了しました。'},
                       {id:'ad001-i001',title:'ログアウト',message:'ログアウトが完了しました。'}
                       ]

  const QuestionMessage = [{id:'ad000-q001',title:'作成',message:'データを追加してもよろしいですか？'}, 
                           {id:'ad000-q001',title:'更新',message:'データを更新してもよろしいですか？'},
                           {id:'ad000-q001',title:'削除',message:'データを削除してもよろしいですか？'},
                           {id:'ad999-q999',title:'死の宣告',message:'本当によろしいですか？'}
                           ]

    useImperativeHandle(ref, () => ({
        MessageOpen: (ref) => {
            console.log(ref)
            if (flg == false){
                let messageType = ref.substr( 6, 1 );
                setCancelFlg(messageType)
                
                let message 
                if (messageType == 'e') {
                    message = ErrorMessage.filter(m => {
                        return m.id === ref
                    });
                }else if(messageType == 'i') {
                    message = InfoMessage.filter(m => {
                        return m.id === ref
                    });
                }else if(messageType == 'q') {
                    message = QuestionMessage.filter(m => {
                        return m.id === ref
                    });
                }
// console.log(message)
                setTitle(message[0].title)
                setMessage(message[0].message)                    
                setOpen(true)
                setFlg(true)
            } 
        }
    }))

    const dialogclose = () => {
        setOpen(false);
        setFlg(false)
    }

    return (
        <div>
          <Dialog
            open={open}
            onClose={dialogclose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
            {title}          
            </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            {message}          
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={dialogclose}>OK</Button>
            {(() => {
                if (cancelFlg == 'q') {
                    return <Button onClick={dialogclose} autoFocus>キャンセル</Button>;
                }
            })()}
            {/* <Button onClick={dialogclose} autoFocus>キャンセル</Button> */}
          </DialogActions>
        </Dialog>
      </div>
    )
}
export default forwardRef(AlertDialog)