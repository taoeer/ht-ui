interface AlertProps {  
  title?: string;
  content?: string;
}

declare class Alert extends React.Component<Alert, null> {
  show: (title: string, content: React.ReactNode) => void;
}