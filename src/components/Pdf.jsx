import "./Pdf.css";
import generatePDF, { Resolution, Margin } from "react-to-pdf";
import { useRef } from "react";



const getTargetElement = () => document.getElementById("content-id");

const Pdf = (props) => {
  function processInput(input) {
    if (!input || typeof input !== "string") return [];

    let numbers = input.split(",").map(num => num.trim());
    let output = [];

    numbers.forEach((number) => {
      if (number.includes("-")) {
        let range = number.split("-");
        if (range.length === 2) {
          let start = parseInt(range[0], 10);
          let end = parseInt(range[1], 10);
          if (!isNaN(start) && !isNaN(end) && start <= end) {
            for (let i = start; i <= end; i++) {
              output.push(i);
            }
          }
        }
      } else {
        let num = parseInt(number, 10);
        if (!isNaN(num)) {
          output.push(num);
        }
      }
    });

    return output;
  }

  function convertDateFormat(dateStr) {
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  }

  const { formData } = props;
  const {
    date,
    experimentNumberRange,
    addLateralEnters,
    rollNumberRange,
    rollNumberPrefix,
    semester,
    subject,
    branch,
    numberOfExperimentsPerStudent,
  } = formData;

  function capitalizeFirstLetterOfEachWord(sentence) {
    // Define the list of words to exclude from capitalization
    const smallWords = ['a', 'an', 'the', 'and', 'but', 'or', 'nor', 'for', 'so', 'yet', 'at', 'by', 'from', 'of', 'on', 'to', 'with'];
  
    // Split the sentence into an array of words
    const words = sentence.split(' ');
  
    // Map through each word and conditionally capitalize the first letter
    const capitalizedWords = words.map((word, index) => {
      if (index === 0 || !smallWords.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    });
  
    // Join the capitalized words back into a single string
    return capitalizedWords.join(' ');
  }
  const options = {
    method: "save",
    filename: `${capitalizeFirstLetterOfEachWord(subject)}`,
    resolution: Resolution.HIGH,
    page: {
      margin: Margin.SMALL,
      format: "A4",
      orientation: "portrait",
    },
    canvas: {
      mimeType: "image/jpeg",
      qualityRatio: 1,
    },
    overrides: {
      pdf: {
        compress: true,
      },
      canvas: {
        useCORS: true,
      },
    },
  };

  let rollNumberList = processInput(rollNumberRange).map((num) => rollNumberPrefix + num);

  if (addLateralEnters) {
    const { lesRollNumberRange, lesRollNumbersPrefix } = formData;
    const lesRollNumberList = processInput(lesRollNumberRange).map((num) => lesRollNumbersPrefix + num);
    rollNumberList = [...rollNumberList, ...lesRollNumberList];
  }

  const experimentList = processInput(experimentNumberRange);

  function allocateRollNumber(rollNumberList, experimentNumberList, experimentsPerStudent) {
    const allocatedRollNumbers = [];
    let experimentNumberIndex = 0;

    rollNumberList.forEach((rollNumber) => {
      const experiments = [];
      for (let i = 0; i < experimentsPerStudent; i++) {
        experiments.push(experimentNumberList[experimentNumberIndex]);
        experimentNumberIndex = (experimentNumberIndex + 1) % experimentNumberList.length;
      }
      allocatedRollNumbers.push({ rollNumber, experiments });
    });

    return allocatedRollNumbers;
  }

  const allocatedRollNumbers = allocateRollNumber(rollNumberList, experimentList, numberOfExperimentsPerStudent);
  console.log(allocatedRollNumbers)

  const target = useRef();

  return (
    <>
      <div className="App">
        <div className="main" ref={target} id="content-id">
          <div className="header">
            <div className="header-content">
              <img
                src="https://res.cloudinary.com/dxcob4mbd/image/upload/v1715521024/IMG_20240512_190555.png_rlnpd4.png"
                alt="logo"
                className="logo"
              />
              <h1 className="col-name">
                SRI VENKATESWARA COLLEGE OF ENGINEERING & TECHNOLOGY
              </h1>
            </div>
          </div>
          <div className="information-container">
            <div className="information col-1">
              <p className="side-heading">
                Subject : <span className="side-heading-value">{`${capitalizeFirstLetterOfEachWord(subject)} Lab`}</span>
              </p>
              <p className="side-heading">
                Branch : <span className="side-heading-value">{branch}</span>
              </p>
            </div>
            <div className="information">
              <p className="side-heading">
                Year & Semester : <span className="side-heading-value">{semester}</span>
              </p>
              <p className="side-heading">
                Date : <span className="side-heading-value">{convertDateFormat(date)}</span>
              </p>
            </div>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Roll Numbers</th>
                  <th className="exp-no">Experiment number</th>
                </tr>
              </thead>
              <tbody>
                {allocatedRollNumbers.map(({ rollNumber, experiments }) => (
                  <tr key={rollNumber}>
                    <td>{rollNumber}</td>
                    <td>{experiments.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="btn-container">
          <button className="download-btn" onClick={() => generatePDF(getTargetElement, options)}>
            Download PDF 
          </button>
        </div>
      </div>
    </>
  );
};

export default Pdf;
