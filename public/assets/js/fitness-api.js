const encodedParams = new URLSearchParams();
encodedParams.append("system", "metric");
encodedParams.append("height", "190");
encodedParams.append("weight", "80");
encodedParams.append("age", "30");
encodedParams.append("gender", "male");
encodedParams.append("exercise", "little");
// encodedParams.append("neck", "41");
// encodedParams.append("hip", "100");
// encodedParams.append("waist", "88");
encodedParams.append("goal", "maintenance");
encodedParams.append("deficit", "500");
encodedParams.append("goalWeight", "85");

const options = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "96eeee70d8msh0eacc52ca5d036ap1265aejsnbec8937746ef",
    "X-RapidAPI-Host": "fitness-api.p.rapidapi.com",
  },
  body: encodedParams,
};

// fetch("https://fitness-api.p.rapidapi.com/fitness", options)
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((err) => console.error(err));
