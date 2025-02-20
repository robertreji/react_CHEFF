import Markdown from 'react-markdown';

export default function ClaudeRecipe({ recipe ,isLoading}) {
  return (
    <>
    {isLoading?<>
        <div className="flex justify-center items-center mt-[50px]">
      <div className=" translate-y-5 duration-1000 animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500 "></div>
    </div></>:<div className="prose prose-lg mx-auto my-6 p-4 bg-gray-50 rounded-lg shadow-md">
      <Markdown
        components={{
          h1: ({...props }) => <h1 className="text-4xl font-bold font-serif my-4" {...props} />,
          h2: ({...props }) => <h2 className="text-3xl font-bold my-3 underline" {...props} />,
          p: ({...props }) => <p className="my-2 text-gray-600 text-base" {...props} />,
          ul: ({...props }) => <ul className="list-disc ml-6 my-2 text-purple-800" {...props} />,
          li: ({...props }) => <li className="my-1 font-bold" {...props} />,
          
        }}
      >
        {recipe}
      </Markdown>
    </div>}
    </>
  );
}
