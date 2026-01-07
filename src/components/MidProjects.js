
import React from 'react';
import ProjectGrid from './ProjectGrid';
import GameImg from '../assets/game-image.png';
import HeartImg from '../assets/HeartImg.png';
import BumbleImg from '../assets/BumbleImg.avif';
import PlaneImg from '../assets/PlaneImg.avif';
import SudokuImg from '../assets/Sudoku.avif';
import ConvexImg from '../assets/ConvexImg.avif';




const MidProjects = () => {
    const myProjects = [
    {
      title: "2048 Game & Solver",
      category: "Game Development, AI",
      description: "A 2048 Game generates new puzzles & automatically solves them",
      fullDescription: "The 2048 generator starts off by designing the board as an array of 0’s. Once the game is in motion, game inputs two random numbers, either a 2 or a 4, to begin the game. The player can then choose to either play the game, or use an automatic solver. The solver uses a heuristic algorithm to find the best route to win the game; to reach 2048. The game solver measures the situation of the board, and considers what the situation of the board if it moved left, right, up or down. For each possible move, it considers where the next random tile could be placed and displays a list of possible outcomes.",
      image: GameImg,
      skills: ["Python", "NumPy", "PyGame", "Heuristic Algorithm"],
      completion: 1.0, // 0.0 to 1.0 (will show as percentage)
      githubUrl: "https://github.com/m4nvisharma/2048Game-Solver",
      liveUrl: "", // optional
      features: ""
    }
    ,
    {
      title: "Biological Ray Tracer",
      category: "Computer Graphics, Computational Biology, Light Physics",
      description: "A work-in-progress ray tracer exploring realistic light interaction with complex organic geometry, aiming toward visualizing a biological heart.",
      fullDescription: "This project focuses on building a custom ray tracer from the ground up, with support for reflection, refraction, and procedural surface patterns. The long-term goal is to render a biologically inspired human heart model, exploring how physically based rendering techniques can be applied to scientific and medical visualization. At its current stage, the project includes a functional ray tracer capable of rendering static scenes with multiple materials and lighting effects, as well as a preliminary 3D heart model designed in Tinkercad. Future work will integrate complex organic geometry, improve realism, and experiment with rendering techniques used in medical imaging and simulation.",
      image: HeartImg,
      skills: ["Python", "Ray Tracing", "TinkerCAD", "Linear Algebra", "Physics-based Rendering"],
      completion: 0.75, // 0.0 to 1.0 (will show as percentage)
      githubUrl: "",
      liveUrl: "", // optional
      features: ""
    },
    {
      title: "Flight Plan",
      category: "A* Algorithm, Pathfinding",
      description: "An intelligent flight planning system that computes optimal routes using the A* pathfinding algorithm.",
      fullDescription: "This project implements a flight path planning system that uses the A* algorithm to compute efficient routes between locations while minimizing cost functions such as distance or obstacles. The system models the environment as a graph and applies heuristic-driven search to ensure optimal and performant route planning.",
      image: PlaneImg,
      skills: ["Python", "A* Algorithm"],
      completion: 1, // 0.0 to 1.0 (will show as percentage)
      githubUrl: "https://github.com/m4nvisharma/flightplan",
      liveUrl: "", // optional
      features: ""
    },
    {
      title: "Convex Hull Visualization",
      category: "A* Algorithm, Pathfinding",
      description: "A visual exploration of convex hull algorithms, rendered dynamically using Matplotlib.",
      fullDescription: "This project implements a flight path planning system that uses the A* algorithm to compute efficient routes between locations while minimizing cost functions such as distance or obstacles. The system models the environment as a graph and applies heuristic-driven search to ensure optimal and performant route planning.",
      image: ConvexImg,
      skills: ["Python", "Matplotlib", "Data Visualization", "Computational Geometry"],
      completion: 1, // 0.0 to 1.0 (will show as percentage)
      githubUrl: "https://github.com/m4nvisharma/aniconvexhull",
      liveUrl: "", // optional
      features: ""
    }, 
    {
      title: "Sudoku Game & Solver",
      category: "Algorithms, Artificial Intelligence",
      description: "A Sudoku puzzle generator and solver built using the backtracking algorithm.",
      fullDescription: "This project generates valid Sudoku puzzles and solves them using a recursive backtracking approach. It demonstrates constraint satisfaction, depth-first search, and efficient pruning techniques to reduce the solution space.",
      image: SudokuImg,
      skills: ["Python", "Backtracking Algorithm", "Constraint Satisfaction", "Recursion", "Data Structures"],
      completion: 1, // 0.0 to 1.0 (will show as percentage)
      githubUrl: "https://github.com/m4nvisharma/SudokuSolver",
      liveUrl: "", // optional
      features: ""
    },
    {
      title: "Real-Life Transformers",
      category: "Robotics, Embedded Systems, Artifical Intelligence (Future)",
      description: "A childhood dream come true. An ambitious robotics project aiming to build a real-world, voice-controlled Transformer that converts between a car and a robot.",
      fullDescription: "This ongoing project aims to design and build a physical Transformer-inspired robot modeled after Bumblebee. The robot is intended to mechanically transform between vehicle and humanoid forms, combining complex mechanical design with embedded systems, AI, and software control. Planned features include voice control, autonomous behaviors, and coordinated motor control across multiple actuators. The project integrates robotics, software engineering, and artificial intelligence, pushing the boundary between hardware design and intelligent systems.",
      image: BumbleImg,
      skills: ["C++", "Mechanical Systems", "Embedded Systems", "Microcontrollers"],
      completion: 0.25, // 0.0 to 1.0 (will show as percentage)
      githubUrl: "https://github.com/yourusername/repo",
      liveUrl: "", // optional
      features: ""
    }
    // Add more projects...
  ];

  return (
    <div className="App">
      <ProjectGrid projects={myProjects} />
    </div>
  );
}

export default MidProjects;

