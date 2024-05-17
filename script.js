function showForm() {

    let argForm = document.getElementById('complex-form');
    let geomForm = document.getElementById('trign-form');
  
    if (document.querySelector('input[name="form"]:checked').value === 'algebraic') {
      argForm.style.display = "block";
      geomForm.style.display = "none";
  
    }
    if (document.querySelector('input[name="form"]:checked').value === 'trigonometric') {
      geomForm.style.display = "block";
      argForm.style.display = "none";
    }
  }
  let result = document.getElementById('results');
  let selectedValues = [];
  
  
  function calculate() {
    let selectElt = document.getElementById('operations');
    let selectedValues = [];
    for (let i = 0; i < selectElt.options.length; i++) {
      let option = selectElt.options[i];
      if (option.selected) {
        selectedValues.push(option.value);
      }
    }
  
    if (document.querySelector('input[name="form"]:checked').value === 'algebraic') {
  
      let real1 = document.getElementById('real1').value;
      let imag1 = document.getElementById('imag1').value;
      let real2 = document.getElementById('real2').value;
      let imag2 = document.getElementById('imag2').value;
  
      document.getElementById('real1').onfocus = function() {
        this.style.borderColor = '';
      };
      document.getElementById('real2').onfocus = function() {
        this.style.borderColor = '';
      };
      document.getElementById('imag1').onfocus = function() {
        this.style.borderColor = '';
      };
      document.getElementById('imag2').onfocus = function() {
        this.style.borderColor = '';
      };
  
      if (real1 === ''  || real2 === '' || isNaN(real2) || imag1 === '' || isNaN(imag1) || imag2 === '' || isNaN(imag2)) {
  
        if (real1 === '' || isNaN(real1)) {
          document.getElementById('real1').style.borderColor = "red";
        }
        if (real2 === '' || isNaN(real2)) {
          document.getElementById('real2').style.borderColor = "red";
        }
        if (imag1 === '' || isNaN(imag1)) {
          document.getElementById('imag1').style.borderColor = "red";
        }
        if (imag2 === '' || isNaN(imag2)) {
          document.getElementById('imag2').style.borderColor = "red";
        }
  
  
      }
      else {
        let select = document.getElementById("operations");
        let selectedOptions = select.selectedOptions;
  
        if (selectedOptions.length === 0) {
          document.querySelector('.e').classList.add("text");
  
        }
  
  
  
        else {
  
  
          if (selectedValues.includes('multiply')) {
            let result1 = document.getElementById('result1')
            let resultV = real1 * real2 - imag1 * imag2;
            let resultIm = real1 * imag2 + real2 * imag1;
            let result = resultV + ' + ' + resultIm + 'i';
            result1.textContent = result;
          }
          if (selectedValues.includes('divide')) {
            if ((real2 * real2 + imag2 * imag2) === 0) {
              document.getElementById('real2').style.borderColor = "red";
              document.getElementById('imag2').style.borderColor = "red";
            }
            else {
              let result2 = document.getElementById('result2')
              let resultV = (real1 * real2 - imag1 * imag2) / (real2 * real2 + imag2 * imag2);
              let resultIm = (imag1 * real2 - real1 * imag2) / (real2 * real2 + imag2 * imag2);
              let result = resultV + ' + ' + resultIm + 'i';
              result2.textContent = result;
            }
          }
          if (selectedValues.includes('add')) {
            let result3 = document.getElementById('result3')
            let resultV = real1 + real2;
            let resultIm = imag1 + imag2;
            let result = resultV + ' + ' + resultIm + 'i';
            result3.textContent = result;
          }
          if (selectedValues.includes('subtract')) {
            let result4 = document.getElementById('result4')
            let resultV = real1 - real2;
            let resultIm = imag1 - imag2;
            let result = resultV + ' + ' + resultIm + 'i';
            result4.textContent = result;
          }
        }
  
      }
    }
  
  
    else if (document.querySelector('input[name="form"]:checked').value === 'trigonometric') {
      let radius1 = document.getElementById('radius1').value;
      let angle1 = document.getElementById('angle1').value;
      let radius2 = document.getElementById('radius2').value;
      let angle2 = document.getElementById('angle2').value;
  
      document.getElementById('radius1').onfocus = function() {
        this.style.borderColor = '';
      };
      document.getElementById('radius2').onfocus = function() {
        this.style.borderColor = '';
      };
      document.getElementById('angle1').onfocus = function() {
        this.style.borderColor = '';
      };
      document.getElementById('angle2').onfocus = function() {
        this.style.borderColor = '';
      };
  
      if (radius1 === '' || isNaN(radius1) || radius2 === '' || isNaN(radius2) || angle1 === '' || isNaN(angle1) || angle2 === '' || isNaN(angle1)) {
        if (radius1 === '' || isNaN(radius1)) {
          document.getElementById('radius1').style.borderColor = "red";
        }
        if (radius2 === '' || isNaN(radius2)) {
          document.getElementById('radius2').style.borderColor = "red";
        }
        if (angle1 === '' || isNaN(angle1)) {
          document.getElementById('angle1').style.borderColor = "red";
        }
        if (angle2 === '' || isNaN(angle2)) {
          document.getElementById('angle2').style.borderColor = "red";
        }
  
  
      }
  
      if (selectedValues.includes('multiply')) {
        let result1 = document.getElementById('result1')
        let resultV = Math.cos(radius1 + radius2);
        let resultIm = Math.cos(angle1 + angle2);
        let result = resultV + ' + ' + resultIm + 'i';
        result1.textContent = result;
      }
      if (selectedValues.includes('divide')) {
        let result2 = document.getElementById('result2')
        let resultV = Math.cos(radius1 - radius2);
        let resultIm = Math.cos(angle1 - angle2);
        let result = resultV + ' + ' + resultIm + 'i';
        result2.textContent = result;
      }
      if (selectedValues.includes('add')) {
        let result3 = document.getElementById('result3')
        let resultV = radius1 * Math.cos(angle1) + radius2 * Math.cos(angle2);
        let resultIm = radius1 * Math.sin(angle1) + radius2 * Math.sin(angle2);
        let result = resultV + ' + ' + resultIm + 'i';
        result3.textContent = result;
      }
      if (selectedValues.includes('substract')) {
        let result4 = document.getElementById('result4')
        let resultV = radius1 * Math.cos(angle1) - radius2 * Math.cos(angle2);
        let resultIm = radius1 * Math.sin(angle1) - radius2 * Math.sin(angle2);
        let result = resultV + ' + ' + resultIm + 'i';
        result4.textContent = result;
      }
    }
  }
  
  
  
  
  function clearForm() {
    document.getElementById('real1').value = '';
    document.getElementById('imag1').value = '';
    document.getElementById('real2').value = '';
    document.getElementById('imag2').value = '';
    document.getElementById('radius1').value = '';
    document.getElementById('angle1').value = '';
    document.getElementById('radius2').value = '';
    document.getElementById('angle2').value = '';
    document.querySelector('.e').classList.remove("text");
  }