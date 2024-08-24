let result = {
  tag: "",
  free: false,
  role: false,
  user: "akshaykumar",
  email: "akshaykumar@codewithharry.com",
  score: 0.64,
  state: "undeliverable",
  domain: "codewithharry.com",
  reason: "invalid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: false,
  did_you_mean: "",
  format_valid: true,
};

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("clicked");
  resultCont.innerHTML = `<img width="50" src="img/Spinner.svg" alt="">`;
  let key = "ema_live_A9Te6BShk0qQfbnUHecgtfEnn1oySxDT725qm0Zx";
  let email = document.getElementById("username").value;

  let url = ` https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();
  let str = ``;
  for (key of Object.keys(result)) {
    if (result[key] !== "" && result[key] !== " ") {
      str = str + `<div>${key}: ${result[key]}</div>`;
    }
  }

  resultCont.innerHTML = str;
});
