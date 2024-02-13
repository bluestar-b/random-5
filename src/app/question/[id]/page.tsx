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
    <div className="px-4 py-2 text-sm md:text-lg max-w-full overflow-auto">
      {children}
    </div>
  );
}

  