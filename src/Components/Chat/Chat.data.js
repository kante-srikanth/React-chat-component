import React from "react";
import { loremIpsum } from "lorem-ipsum";

import { FaRobot, FaUser, FaQuestion, FaLessThan } from "react-icons/fa";
import {
  AiFillFilePdf,
  AiFillFileWord,
  AiOutlineFileJpg,
  AiFillFileExcel,
  AiFillFilePpt,
  AiFillFileZip,
} from "react-icons/ai";

import Avatar from "../Core/Avatar";

var _ = require("lodash");

const Count = 10;
const transcriptsIcon = [<FaRobot />, <FaUser />, <FaQuestion />];
const directionType = ["in", "out", "other"];
const messageType = ["sender", "receiver", "other"];
const attachmentsIcon = [
  <AiFillFilePdf />,
  <AiFillFileWord />,
  <AiOutlineFileJpg />,
  <AiFillFileExcel />,
  <AiFillFilePpt />,
  <AiFillFileZip />,
];

const timeStamps = [
  "01:10PM",
  "01:11PM",
  "01:12PM",
  "01:13PM",
  "01:14PM",
  "01:15PM",
  "01:16PM",
  "01:17PM",
  "01:18PM",
  "01:19PM",
];
function getRandomSampling(data) {
  let sample = _.sample(data);
  console.log(sample);
  return sample;
}
export const transcripts = Array(Count)
  .fill(null)
  .map((i, idx) => {
    return {
      timeStamp: timeStamps[idx],
      icon: getRandomSampling(transcriptsIcon),
      message: loremIpsum({
        count: 1,
        unit: "sentences",
        sentenceLowerBound: 4,
        sentenceUpperBound: 10,
      }),
    };
  });

export const ChatMessages = Array(Count)
  .fill(null)
  .map((i, idx) => {
    let _attachments = [];
    if ([1, 3, 5, 6, 8, 9].includes(idx)) {
      _attachments = null;
    } else {
      _attachments = [
        {
          name: "Hdfc_Bank_Statement",
          icon: getRandomSampling(attachmentsIcon),
          meta: "PDF 2.1mb",
        },
      ];
    }
    return {
      direction: getRandomSampling(directionType),
      type: getRandomSampling(messageType),
      timeStamp: timeStamps[idx],
      children: loremIpsum({
        count: 1,
        unit: "sentences",
        sentenceLowerBound: 4,
        sentenceUpperBound: 10,
      }),
      attachments: _attachments,
      avatar: <Avatar title="kante" />,
    };
  });
