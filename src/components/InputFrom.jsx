import React, { useState } from "react";
import { Model} from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./InputFrom.css";
import Pdf from "./Pdf";

export const themeJson  = {
  "backgroundImage": "",
  "backgroundImageFit": "cover",
  "backgroundImageAttachment": "scroll",
  "backgroundOpacity": 1,
  "header": {
    "height": 78,
    "inheritWidthFrom": "survey",
    "textAreaWidth": 512,
    "overlapEnabled": false,
    "backgroundImageOpacity": 1,
    "backgroundImageFit": "cover",
    "logoPositionX": "right",
    "logoPositionY": "top",
    "titlePositionX": "left",
    "titlePositionY": "bottom",
    "descriptionPositionX": "left",
    "descriptionPositionY": "bottom"
  },
  "themeName": "flat",
  "colorPalette": "light",
  "isPanelless": false,
  "cssVariables": {
    "--sjs-general-backcolor": "rgba(246, 246, 246, 1)",
    "--sjs-general-backcolor-dark": "rgba(235, 235, 235, 1)",
    "--sjs-general-backcolor-dim": "rgba(255, 255, 255, 1)",
    "--sjs-general-backcolor-dim-light": "rgba(255, 255, 255, 1)",
    "--sjs-general-backcolor-dim-dark": "rgba(235, 235, 235, 1)",
    "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
    "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.45)",
    "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
    "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)",
    "--sjs-primary-backcolor": "rgba(53, 127, 208, 1)",
    "--sjs-primary-backcolor-light": "rgba(53, 127, 208, 0.1)",
    "--sjs-primary-backcolor-dark": "rgba(49, 118, 193, 1)",
    "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)",
    "--sjs-base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
    "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
    "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
    "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
    "--sjs-shadow-small": "0px 0px 0px 1px rgba(0, 0, 0, 0.15)",
    "--sjs-shadow-small-reset": "0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
    "--sjs-shadow-medium": "0px 0px 0px 1px rgba(0, 0, 0, 0.1),0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
    "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
    "--sjs-shadow-inner": "inset 0px 0px 2px 0px rgba(0, 0, 0, 0.15)",
    "--sjs-shadow-inner-reset": "0px 0px 0px 0px rgba(0, 0, 0, 0.12)",
    "--sjs-border-light": "rgba(0, 0, 0, 0.12)",
    "--sjs-border-default": "rgba(0, 0, 0, 0.1)",
    "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
    "--sjs-special-red": "rgba(229, 10, 62, 1)",
    "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
    "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-green": "rgba(25, 179, 148, 1)",
    "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)",
    "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-blue": "rgba(67, 127, 217, 1)",
    "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)",
    "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
    "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
    "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-article-font-xx-large-textDecoration": "none",
    "--sjs-article-font-xx-large-fontWeight": "700",
    "--sjs-article-font-xx-large-fontStyle": "normal",
    "--sjs-article-font-xx-large-fontStretch": "normal",
    "--sjs-article-font-xx-large-letterSpacing": "0",
    "--sjs-article-font-xx-large-lineHeight": "64px",
    "--sjs-article-font-xx-large-paragraphIndent": "0px",
    "--sjs-article-font-xx-large-textCase": "none",
    "--sjs-article-font-x-large-textDecoration": "none",
    "--sjs-article-font-x-large-fontWeight": "700",
    "--sjs-article-font-x-large-fontStyle": "normal",
    "--sjs-article-font-x-large-fontStretch": "normal",
    "--sjs-article-font-x-large-letterSpacing": "0",
    "--sjs-article-font-x-large-lineHeight": "56px",
    "--sjs-article-font-x-large-paragraphIndent": "0px",
    "--sjs-article-font-x-large-textCase": "none",
    "--sjs-article-font-large-textDecoration": "none",
    "--sjs-article-font-large-fontWeight": "700",
    "--sjs-article-font-large-fontStyle": "normal",
    "--sjs-article-font-large-fontStretch": "normal",
    "--sjs-article-font-large-letterSpacing": "0",
    "--sjs-article-font-large-lineHeight": "40px",
    "--sjs-article-font-large-paragraphIndent": "0px",
    "--sjs-article-font-large-textCase": "none",
    "--sjs-article-font-medium-textDecoration": "none",
    "--sjs-article-font-medium-fontWeight": "700",
    "--sjs-article-font-medium-fontStyle": "normal",
    "--sjs-article-font-medium-fontStretch": "normal",
    "--sjs-article-font-medium-letterSpacing": "0",
    "--sjs-article-font-medium-lineHeight": "32px",
    "--sjs-article-font-medium-paragraphIndent": "0px",
    "--sjs-article-font-medium-textCase": "none",
    "--sjs-article-font-default-textDecoration": "none",
    "--sjs-article-font-default-fontWeight": "400",
    "--sjs-article-font-default-fontStyle": "normal",
    "--sjs-article-font-default-fontStretch": "normal",
    "--sjs-article-font-default-letterSpacing": "0",
    "--sjs-article-font-default-lineHeight": "28px",
    "--sjs-article-font-default-paragraphIndent": "0px",
    "--sjs-article-font-default-textCase": "none",
    "--sjs-header-backcolor": "transparent",
    "--sjs-font-family": "Open Sans",
    "--sjs-font-editorfont-placeholdercolor": "rgba(0, 0, 0, 0.45)",
    "--sjs-font-questiondescription-size": "13px"
  }
}




const json ={
  "logoPosition": "right",
  "focusFirstQuestionAutomatic": true,
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "panel",
      "name": "panel1",
      "elements": [
       {
        "type": "text",
        "name": "branch",
        "title": "Branch ",
        "hideNumber": true,
        "isRequired": true,
        "dataList": [
         "COMPUTER SCIENCE AND ENGINEERING",
         "MECHANICAL ENGINEERING",
         "ELECTRONICS AND COMMUNICATIONS ENINEERING",
         "ELECTRICAL AND ELECTRONICS ENGINEERING",
         "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING ENGINEERING",
         "CIVIL ENGINEERING",
         "COMPUTER SYSTEMS MANAGEMENT",
         "ARTIFICIAL INTELLIGENCE AND DATA SCIENCE ENGINEERING"
        ]
       },
       {
        "type": "dropdown",
        "name": "semester",
        "title": "Semester ",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
         "1 - 1",
         "1 - 2",
         "2 - 1",
         "2 - 2",
         "3 - 1",
         "3 - 2",
         "4 - 1",
         "4 - 2"
        ]
       },
       {
        "type": "text",
        "name": "subject",
        "startWithNewLine": false,
        "title": "Subject ",
        "hideNumber": true,
        "isRequired": true,
        "validators": [
         {
          "type": "text",
          "minLength": 5
         }
        ]
       },
       {
        "type": "text",
        "name": "rollNumberPrefix",
        "title": "Roll Numbers Prefix",
        "description": "Exter common part in all roll numbers. \nEx: 21MT1A0***",
        "hideNumber": true,
        "isRequired": true,
        "maskType": "pattern",
        "maskSettings": {
         "saveMaskedValue": true,
         "pattern": "99MT9A9"
        }
       },
       {
        "type": "text",
        "name": "rollNumberRange",
        "startWithNewLine": false,
        "title": "Roll number Range\n",
        "description": "Ex: 501-559,561,563\n ",
        "hideNumber": true,
        "isRequired": true,
        "validators": [
         {
          "type": "regex",
          "text": "Incorrect input",
          "regex": "^(?:(\\d+(-\\d+)?)|(\\d+))(,(?:(\\d+(-\\d+)?)|(\\d+)))*$"
         }
        ]
       },
       {
        "type": "boolean",
        "name": "addLateralEnters",
        "title": "Add Lateral Enters",
        "hideNumber": true,
        "isRequired": true
       },
       {
        "type": "text",
        "name": "numberOfExperimentsPerStudent",
        "startWithNewLine": false,
        "title": "Number of experiments per Student",
        "hideNumber": true,
        "isRequired": true,
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "lesRollNumbersPrefix",
        "visibleIf": "{addLateralEnters} = true",
        "title": "LE's Roll Numbers Prefix",
        "description": "Exter common part in all roll numbers. \nEx: 21MT1A0***",
        "hideNumber": true,
        "isRequired": true,
        "maskType": "pattern",
        "maskSettings": {
         "saveMaskedValue": true,
         "pattern": "99MT9A9"
        }
       },
       {
        "type": "text",
        "name": "lesRollNumberRange",
        "visibleIf": "{addLateralEnters} = true",
        "startWithNewLine": false,
        "title": "LE's Roll number Range\n",
        "description": "Ex: 501-559,561,563\n ",
        "hideNumber": true,
        "isRequired": true,
        "validators": [
         {
          "type": "regex",
          "text": "Incorrect input",
          "regex": "^(?:(\\d+(-\\d+)?)|(\\d+))(,(?:(\\d+(-\\d+)?)|(\\d+)))*$"
         }
        ]
       },
       {
        "type": "text",
        "name": "experimentNumberRange",
        "title": "Experiments numbers range",
        "description": "Ex: 1-10,5,6",
        "hideNumber": true,
        "isRequired": true,
        "validators": [
         {
          "type": "regex",
          "text": "Incorrect input",
          "regex": "^(?:(\\d+(-\\d+)?)|(\\d+))(,(?:(\\d+(-\\d+)?)|(\\d+)))*$"
         }
        ]
       },
       {
        "type": "dropdown",
        "name": "typeOfAllocation",
        "startWithNewLine": false,
        "title": "Type of allocation ",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
         {
          "value": "randomly",
          "text": "Randomly"
         },
         {
          "value": "serially",
          "text": "Serially"
         },
        ]
       },
       {
        "type": "text",
        "name": "date",
        "startWithNewLine": false,
        "title": "Date",
        "hideNumber": true,
        "isRequired": true,
        "inputType": "date"
       }
      ],
      "minWidth": "100px"
     }
    ],
    "title": "Information Needed "
   }
  ],
  "showCompletedPage": false,
  "questionDescriptionLocation": "underInput",
  "completeText": "Submit",
  "requiredText": ""
 }
function InputFrom() {
  const [formData, setFormData] = useState(null);

  const handleComplete = (sender) => {
    try {
      console.log(sender)
      const formData = sender.data;
      setFormData(formData);
    } catch (error) {
      console.error("Error setting form data:", error);
    }
  };

  const survey = new Model(json);
  survey.applyTheme(themeJson);
  survey.onComplete.add(handleComplete);

  return (
    <>{formData ? <Pdf formData={formData}/> : <Survey model={survey} />}</>
  );
}

export default InputFrom;
