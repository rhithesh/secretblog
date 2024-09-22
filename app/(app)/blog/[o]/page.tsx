
"use client"
import { useEffect,useState } from "react";
import { CalendarIcon, UserIcon } from "lucide-react";

export default  function BlogPost({ params }: { params: { o: string } }) {
  console.log(params?.o);

  const [data, setData] = useState<{ title: string; content: string }>({ title: "", content: "" });

  useEffect(()=>{

    async function j(){
    const Content = await fetch(
      `/api/getOnePost?id=${params?.o}`,
    );
  
    const data = await Content.json();
    setData(data.data)

  }




  },[])

 

  return (
    <div className="max-w-2xl mx-auto p-4 mt-20">
      <article className="prose lg:prose-xl">
        {/*  // title  */}
        <h1 className="text-3xl font-bold mb-4">
          {data?.title} 
        </h1>
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <CalendarIcon className="w-4 h-4 mr-1" />
          <span>May 20, 2023</span>
        </div>
        <p>{data?.content}</p>
      </article>
    </div>
  );
}
