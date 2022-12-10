# coding: utf-8
import nfc
import binascii
import time
from threading import Thread, Timer

# 待ち受けの1サイクル秒
TIME_cycle = 10.0
# 待ち受けの反応インターバル秒
TIME_interval = 0.2
# タッチされてから次の待ち受けを開始するまで無効化する秒
TIME_wait = 3

# NFC接続リクエストのための準備
# 212F(FeliCa)で設定
target_req_felica = nfc.clf.RemoteTarget("212F")

# 106A(NFC type A)で設定
target_req_nfc = nfc.clf.RemoteTarget("106A")


def check_NFC():
    print('NFC and FeliCa waiting...')
    # USBに接続されたNFCリーダに接続してインスタンス化
    clf = nfc.ContactlessFrontend('usb')

    mydict = {}
    while True:
        target_res = clf.sense(target_req_nfc, target_req_felica, iterations=int(
            TIME_cycle//TIME_interval)+1, interval=TIME_interval)
        if not target_res is None:
            tag = nfc.tag.activate(clf, target_res)
            print('TAG type: ' + tag.type)
            # NFCタグに埋めたtextを読む
            records = tag.ndef.records
            for record in records:
                print('NFC detected. record.text = ' + record.text)
                # str()で変換するとユニコードオブジェクトにならない
                key = str(record.text)
                mydict[key] = key

            print('sleep ' + str(TIME_wait) + ' seconds')
            time.sleep(TIME_wait)

check_NFC()
