// bg image import
import two from './media/bg/2.0.png';
import four from './media/bg/4.0.png';
import av from './media/bg/av.png';
import bb from './media/bg/bb.png';
import board from './media/bg/board.png';
import disk from './media/bg/disk.png';
import ha from './media/bg/ha.png';
import iot from './media/bg/iot.png';
import iran from './media/bg/iran.png';
import mc from './media/bg/mc.png';
import os from './media/bg/os.png';
import qr from './media/bg/qr.png';
import robot from './media/bg/robot.png';
import siemens from './media/bg/siemens.png';
import task from './media/bg/task.png';
import vision from './media/bg/vision.png';

// project data
const projectData = [
  {
    key: 1,
    id: 'siemens',
    color: '#FF5420',
    title: 'Siemens Healthineers',
    bg: siemens,
    desc: 'One year of full-time job at Siemens Healthineers as an ultrasound engineer',
  },
  {
    key: 2,
    id: 'os',
    color: '#F48636',
    title: 'Omran Soule Co.',
    bg: os,
    desc: 'Part-time job at Omran Soule Co. as a python developer and full stack engineer',
  },
  {
    key: 3,
    id: 'robot',
    color: '#F7EBE1',
    title: 'Robot Path Simulator',
    bg: robot,
    desc: 'A small script in Python that turns strings into movement commands for a robot',
  },

  {
    key: 4,
    id: 'iran',
    color: '#F7C69E',
    title: 'Iran Population Map',
    bg: iran,
    desc: 'An interactive population map of Iran using React, Python, Deck.gl and Mapbox',
  },

  {
    key: 5,
    id: 'iot',
    color: '#FECB4B',
    title: 'IoT Boards',
    bg: iot,
    desc: 'A study on the possibility of imlplementing SBCs into home appliences',
  },

  {
    key: 6,

    id: 'bb',
    color: '#3D6033',
    title: 'Breaking Bad Characters',
    bg: bb,
    desc: 'Another small script in Python that outputs episode numbers of Breaking Bad series based on provided charachter input',
  },

  {
    key: 7,
    id: 'mc',
    color: '#7CBD6B',
    title: 'Minecraft Farm Wiki',
    bg: mc,
    desc: 'A hobby website that deals with technical aspect of Minecraft',
  },

  {
    key: 8,
    id: 'vision',
    color: '#2F9A80',
    title: 'Computer Vision and Smart Assistant',
    bg: vision,
    desc: 'A system that gets inputs from the camera and adapts the assistant based on the situation',
  },

  {
    key: 9,
    id: 'four',
    color: '#00FFCC',
    title: 'Personal Website v4.0',
    bg: four,
    desc: 'This website! Created with React',
  },

  {
    key: 10,
    id: 'qr',
    color: '#30D9D9',
    title: 'Object and QR code Detection',
    bg: qr,
    desc: 'A Python project to navigate a drone based on the camera input and scan QR codes to gather points',
  },

  {
    key: 11,
    id: 'task',
    color: '#011936',
    title: 'Task Tracker',
    bg: task,
    desc: 'A simple task tracker in React',
  },

  {
    key: 12,
    id: 'two',
    color: '#323840',
    title: 'Personal Website v2.0',
    bg: two,
    desc: "Previous version of my personal website. It's in Vanilla JS",
  },

  {
    key: 13,
    id: 'disk',
    color: '#A3ACBF',
    title: 'Disk Sorter',
    bg: disk,
    desc: 'A disk sorter based on varying thicknesses of disks.',
  },

  {
    key: 14,
    id: 'av',
    color: '#252140',
    title: 'Autonomous Vehicle Components',
    bg: av,
    desc: "My bachelor's thesis. A study on different methods and components of autopilot systems with the goal of implementing said systems into ordinary vehicles",
  },

  {
    key: 15,
    id: 'ha',
    color: '#F7C8D6',
    title: 'Hamrahan Atebba Co.',
    bg: ha,
    desc: 'Part-time job at Hamrahan Atebba Co. as an IT manager and full stack engineer',
  },

  {
    key: 16,
    id: 'board',
    color: '#B3444F',
    title: 'Self-balancing robot',
    bg: board,
    desc: 'A self-balancing transportation robot',
  },
];

export default projectData;
