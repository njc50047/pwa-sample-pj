import { useEffect } from 'react'
import OneSignal from 'react-onesignal'

export const OneSignalInitial = () => {

    useEffect(() => {
        const oneSignalInit = async () => {
          await OneSignal.init({
            appId: 'ここにOneSignalで発行されたIDを設定',
            safari_web_id: "ここにOneSignalで発行されたIDを設定",
            allowLocalhostAsSecureOrigin: true,
          }).then(() => {
            OneSignal.Slidedown.promptPush()
          })
        }
          oneSignalInit()
      }, [])
  return null
}