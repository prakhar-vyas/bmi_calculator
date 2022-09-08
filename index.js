let age = document.getElementById("age");
let male = document.getElementById("male");
let female = document.getElementById("female");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let displaybmicategory = document.getElementById("displaybmicategory");
let displaybmi = document.getElementById("bmi");


function submit()
{
      if(age.value == "" || height.value == "" || weight.value == "" || (female.checked==false && male.checked==false))
      {
            alert("All values are required")
      }
      else{  
            ht = (height.value/100) * (height.value/100);
            bmi = weight.value/ht;
            bmi = bmi.toFixed(2);
            if(bmi <= 18.50)
            {
               displaybmicategory.innerText = "Underweight"
               displaybmi.innerText = `BMI: ${bmi}`;
            }
            if(bmi > 18.50 && bmi <= 24.90)
            {
               displaybmicategory.innerText = "Healthy"
               displaybmi.innerText = `BMI: ${bmi}`;
            }
            if(bmi > 25 && bmi <= 29.90)
            {
               displaybmicategory.innerText = "Overweight"
               displaybmi.innerText = `BMI: ${bmi}`;
            }
            if(bmi > 30 && bmi <= 34.9)
            {
               displaybmicategory.innerText = "Obese"
               displaybmi.innerText = `BMI: ${bmi}`;
            }
            if(bmi >= 35)
            {
               displaybmicategory.innerText = "Extremely Obese"
               displaybmi.innerText = `BMI: ${bmi}`;
            }
            age.value="";
            height.value="";
            weight.value="";
            document.querySelector('input[name="gender"]:checked').checked = false;
      }
}
