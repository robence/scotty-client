import { message } from 'antd';

export default function configureMessage(): void {
  message.config({
    top: 60,
    duration: 2,
  });
}
