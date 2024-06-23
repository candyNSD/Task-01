// Guess the Random Number

const checkBtn = document.querySelector(".checkBtn");
let guessNum = 5;

checkBtn.addEventListener("click", () => {
    let inputValue = prompt("Guess the Number of 1 to 10:")
    let randomNum = Math.floor(Math.random() * 10) + 1;

    if (guessNum > 0) {
        (inputValue == randomNum)
            ? alert(`congratulation! you guessed the correct number${randomNum} in ${guessNum}`)
            : (randomNum < 5)
                ? alert(`Too low, Try again ${randomNum}`)
                : alert(`Too high, Try again ${randomNum}`)


        guessNum -= 1;

        (guessNum > 0)
            ? alert(`You have ${guessNum} attempts left`)
            : alert("Your number of attempts is over")
    } else {
        alert("No attempt.Please reload the page")
    }

})


// Generate Random Activity


const API_URL = 'https://bored-api.appbrewery.com/random';

        document.querySelector('.generateBtn').addEventListener('click', async () => {
            try {
                const data = await fetchData(API_URL);
                const processedData = processData(data);
                displayData(processedData);
            } catch (error) {
                console.error('Error:', error);
            }
        });

        async function fetchData(url) {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
                throw error;
            }
        }

        function processData(data) {
            return {
                activity: data.activity,
                type: data.type,
                participants: data.participants,
                price: data.price
            };
        }

        function displayData(activity) {
            const activityContainer = document.querySelector('.activityContainer');
            activityContainer.innerHTML = ''; 

            const activityInfo = document.createElement('div');
            activityInfo.innerHTML = `
                <p>Activity: ${activity.activity}</p>
                <p>Type: ${activity.type}</p>
                <p>Participants: ${activity.participants}</p>
                <p>Price: ${activity.price}</p>
            `;
            activityContainer.appendChild(activityInfo);
        }


// // Function combine And Sum
combineAndSum = (...numbers) => {
    return new Promise ((resolve,reject) => {
        try {
            const numArray = [...numbers]
            let sum = 0;
           
            numArray.map(num => {
                sum += num;
            });

            resolve ({
                numbers : numArray,
                sum : sum
            });
        }       
        catch (error) {
            reject(error)
        }
    })
}

combineAndSum(1,2,3,4,5)
.then(result =>{
    const para = document.createElement('p')
    para.textContent = `Numbers: ${result.numbers.join(', ')}, Sum: ${result.sum}`;
    document.querySelector(".sumValue").append(para)
    para.style.color = 'red'
    para.style.fontWeight = "bold"
    para.style.fontSize = "20px"
}) .catch (error => {
    console.error(`Error: ${error}`)
})


