import GlobalNav from "../components/GlobalNav";

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
     <>
     <GlobalNav/>
    {children}
     </>
    )
  }