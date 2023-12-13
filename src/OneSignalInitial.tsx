import { useEffect } from 'react'
import OneSignal from 'react-onesignal'

export const OneSignalInitial = () => {

    useEffect(() => {
        const oneSignalInit = async () => {
          await OneSignal.init({
            appId: '48acf5cf-a77b-4c97-ab6f-e2d69f19efe1',
            safari_web_id: "web.onesignal.auto.0908e376-c893-48cd-92f7-007572df5c49",
            allowLocalhostAsSecureOrigin: true,
          }).then(() => {
            OneSignal.Slidedown.promptPush()
          })
        }
          oneSignalInit()
      }, [])
  return null
}