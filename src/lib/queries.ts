
import { sql } from "./db";

interface Question {
    question_id: number;
    question_text: string;
    creation_date: Date;
}

type QueryResult<T> = T[];


async function getQuestion(questionId: number): Promise<Question | null> {
    const question: QueryResult<Question> = await sql`
        SELECT
            question_id,
            question_text,
            creation_date
        FROM
            questions
        WHERE
            question_id = ${questionId}
    `;
    return question.length ? question[0] : null;
}


  async function insertQuestion({ question_text }: { question_text: string }): Promise<QueryResult<Question>> {
    const questions: QueryResult<Question> = await sql`
      INSERT INTO questions
        (question_text)
      VALUES
        (${question_text})
      RETURNING question_id, question_text, creation_date
    `;
    return questions;
  }
  
  export { getQuestion, insertQuestion };
  