import EntertainmentNav from "../components/EntertainmentNav";
import EntertainmentFooter from '../components/EntertainmentFooter';

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
     <>
     <EntertainmentNav/>
    {children}
    <EntertainmentFooter/>
     </>
    )
  }