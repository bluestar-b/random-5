import { getQuestion } from '@/lib/queries';
import React, { ReactNode } from 'react';

interface QuestionMessageProps {
    children: ReactNode;
  }

export default async function Page({ params
}: {
  params: { id: number }
}) {
    const questionResult = await getQuestion(params.id)
  
  return (
    <main className="min-h-screen flex items-center justify-center">
  
      <div className="max-w-lg w-full p-6 rounded-lg shadow-md">
        <QuestionMessage>
          {questionResult?.question_text}
        </QuestionMessage>
      </div>
    </main>
  );
}



function QuestionMessage({ children }: QuestionMessageProps) {
  return (
    <div className="flex items-center p-6 pt-0 text-md lg:text-xl overflow-auto text-center">
      {children}
    </div>
  );
}

  