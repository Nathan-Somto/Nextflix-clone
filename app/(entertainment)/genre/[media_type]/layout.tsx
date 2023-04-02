export async function generateStaticParams() {
     return [
        { media_type: 'tv'},
        { media_type: 'movie'},
       
      ];
  }
  
  export default function Layout({
    params,
  }: {
    params: { media_type: string };
  }) {
    // ...
    <>
    
    </>
  }