const axios = require('axios'); // legacy way
const fs = require('fs');

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getIndexes() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/index');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function getMatchDates() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/match_dates');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
}

async function getTeams() {
try {
    const response = await axios.get('http://127.0.0.1:8000/api/teams');
    console.log(response);
} catch (error) {
    console.error(error);
}
}

async function getTries() {
try {
    const response = await axios.get('http://127.0.0.1:8000/api/teamstat/France/Try');
    const responseData = response.data;

      // Write the response data to a JSON file
    fs.writeFileSync('tries.json', JSON.stringify(responseData, null, 2));

    console.log(response);
} catch (error) {
    console.error(error);
}
}

data =getTries();

module.exports = { data };

