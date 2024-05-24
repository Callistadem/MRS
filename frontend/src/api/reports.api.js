
/**
 * POSTs a new report with given data.
 * 
 * @param description The description of report.
 * @param email The email of report submitter.
 * @param questionAnswerIDs Form data in questionIDs & answerIDs key-value pairs.
 */
export function submitReport(description, email, questionAnswerIDs) {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/reports`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
        },
        body: JSON.stringify({
            description: description, 
            submitter_email: email,
            responses: Object.keys(questionAnswerIDs).map(questionId => ({
                question_id: questionId,
                answer_id: questionAnswerIDs[questionId]
            }))
        })
    })
    .catch(error => {
        throw error;
    })
    .then(response => {
        if(response.ok) {
            return response.json();
        }
    });
}

/**
 * GETs all active questions to populate the report.
 * @returns array of active questions
 *
 */
export const getQuestions = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/questions?active=true`, {
      method: 'GET',
      headers: {
        'Accept' : 'application/json'
      }
    });

    if (response.ok) {
      const questions = await response.json();
      return questions;
    } else {
      throw new Error('Failed to fetch questions');
    }
  } catch (error) {
    console.error('Error occurred while fetching questions:', error);
    throw error;
  }
};

