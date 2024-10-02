import { useState } from "react"

export default function Form() {
    const [answer, setAnswer] = useState('')
    const [error, setError] = useState(null)
    const [status, setStatus] = useState('typing'); // submitting, success
    if(status === 'success') {
        return <h1>That's right</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting')
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing')
            setError(err)
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }


    return (
        <>
            <h2>City quiz</h2>
            <p>asdsada</p>
            <form onSubmit={handleSubmit}>
                <textarea value={answer} onChange={handleTextareaChange} disabled={status === 'submitting'} />
                <button disabled={
                    answer.length === 0 || status === 'submitting'
                }>
                    Submit
                </button>
                {status === 'error' && 
                    <p className="Error">
                        Good guess but a wrong answer. Try again!
                    </p>
                }
            </form>
        </>
    )
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}