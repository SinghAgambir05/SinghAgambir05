<div align="center">

# Agambir Singh Jammu

**Local AI Systems · Embedded Hardware · CSE (AI & ML) @ SRMIST**

Building offline-first AI assistants on constrained VRAM and designing custom ESP32 hardware—working toward the intersection of Edge AI, TinyML, and VLSI.

<br/>

<a href="mailto:kingagambir@gmail.com"><img src="https://img.shields.io/badge/Email-161B22?style=flat-square&logo=gmail&logoColor=38BDF8" alt="Email"/></a>
<a href="https://www.linkedin.com/in/agambir-singh-jammu-4204212b9/"><img src="https://img.shields.io/badge/LinkedIn-161B22?style=flat-square&logo=linkedin&logoColor=38BDF8" alt="LinkedIn"/></a>
<a href="https://instagram.com/agam_singhj"><img src="https://img.shields.io/badge/Instagram-161B22?style=flat-square&logo=instagram&logoColor=38BDF8" alt="Instagram"/></a>
<a href="https://pinterest.com/SinghAsmoedeus"><img src="https://img.shields.io/badge/Pinterest-161B22?style=flat-square&logo=pinterest&logoColor=38BDF8" alt="Pinterest"/></a>

<img src="https://komarev.com/ghpvc/?username=SinghAgambir05&label=Views&color=161B22&style=flat-square" alt="Profile Views"/>
<img src="https://img.shields.io/github/followers/SinghAgambir05?label=Followers&style=flat-square&color=161B22&logo=github&logoColor=8B949E" alt="Followers"/>
<img src="https://img.shields.io/github/stars/SinghAgambir05?label=Stars&style=flat-square&color=161B22&logo=github&logoColor=8B949E" alt="Stars"/>

</div>

---

### Overview

<table>
<tr>
<td width="50%" valign="top">

**Currently Building**  
**Jarvis** — a fully offline voice assistant running on an **RTX 4050 (6GB VRAM)** using `Ollama (Qwen3:8b)` for reasoning, `ChromaDB` for memory, `faster-whisper` for STT, and `Piper` for TTS.

</td>
<td width="50%" valign="top">

**Currently Learning**  
Sharpening **C, C++, and Java** fundamentals, working through a structured `scikit-learn` project track, and following a self-designed **two-year electronics curriculum** toward TinyML and VLSI.

</td>
</tr>
<tr>
<td width="50%" valign="top">

**Open to Collaborate**  
**Edge AI / TinyML** projects where ESP32-class microcontrollers run lightweight inference locally instead of just streaming raw sensor data to the cloud, plus PCB-backed IoT systems.

</td>
<td width="50%" valign="top">

**Looking for Feedback On**  
Optimizing **local LLM inference on 6GB VRAM** (quantization, context management, latency tuning) and reviewing my **six-peripheral ESP32 PCB shield** layout.

</td>
</tr>
</table>

---

### Jarvis — Local Pipeline

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#161B22','primaryTextColor':'#E6EDF3','primaryBorderColor':'#30363D','lineColor':'#38BDF8','secondaryColor':'#0D1117','tertiaryColor':'#161B22'}}}%%
flowchart LR
    MIC["Voice Input"] --> STT["faster-whisper<br/>(STT)"]
    STT --> LLM["Ollama · Qwen3:8b<br/>(Reasoning)"]
    LLM <--> MEM[("ChromaDB<br/>Memory")]
    LLM --> TTS["Piper<br/>(TTS)"]
    TTS --> SPK["Audio Output"]
    GPU{{"RTX 4050 · 6GB VRAM<br/>100% Offline"}} -.-> LLM
```

---

### Featured Projects

<table>
<tr>
<td width="50%" valign="top">

#### AquaWatch
**IoT Smart Water Quality Monitoring System**  
ESP32 + TDS sensor streaming real-time water quality metrics to Firebase and a live web dashboard.

`ESP32` `TDS Sensor` `Firebase` `Web Dashboard`  
*Published: IEEE-format paper & conference poster*

</td>
<td width="50%" valign="top">

#### Smart E-Waste Sorting System
**Automated Material Classification**  
ESP32 paired with a load cell, proximity sensor, and conductivity probes on a custom PCB shield to auto-sort waste by material.

`ESP32` `Load Cell` `Proximity` `Conductivity` `PCB`  
*Published: Co-authored IEEE-format paper*

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### Custom ESP32 Sensor Shield
**Standardized IoT Hardware Platform**  
Six-peripheral shield with a dual power rail, designed in **EasyEDA** to standardize sensor wiring across my hardware builds.

`EasyEDA` `ESP32` `Dual Power Rail` `PCB Design`

</td>
<td width="50%" valign="top">

#### Smart Thermal Management System
**Closed-Loop Cooling Controller**  
Arduino Nano reading an NTC thermistor to drive a PWM fan via a BC547 transistor in a closed feedback loop.

`Arduino Nano` `NTC Thermistor` `PWM` `BC547`  
*Presented: Conference poster*

</td>
</tr>
<tr>
<td colspan="2" valign="top">

#### Live Temperature & Humidity Tracker
ESP32 with DHT11 and LDR sensors streaming environmental telemetry to Arduino IoT Cloud for remote monitoring.

`ESP32` `DHT11` `LDR` `Arduino IoT Cloud` · *Presented: Conference poster*

</td>
</tr>
</table>

<details>
<summary><b>View System Data Flows</b></summary>
<br/>

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#161B22','primaryTextColor':'#E6EDF3','primaryBorderColor':'#30363D','lineColor':'#38BDF8','secondaryColor':'#0D1117'}}}%%
flowchart LR
    subgraph AquaWatch
        direction LR
        A1["TDS Sensor"] --> A2["ESP32"] --> A3[("Firebase")] --> A4["Web Dashboard"]
    end
    subgraph EWaste["Smart E-Waste Sorter"]
        direction LR
        E1["Load Cell"] --> E4["ESP32 + Custom PCB"]
        E2["Proximity"] --> E4
        E3["Conductivity"] --> E4
        E4 --> E5["Material Sorting"]
    end
    subgraph Thermal["Thermal Management"]
        direction LR
        T1["NTC Thermistor"] --> T2["Arduino Nano"] --> T3["PWM (BC547)"] --> T4["Fan"]
        T4 -. "closed loop" .-> T1
    end
    subgraph Telemetry["Temp & Humidity"]
        direction LR
        H1["DHT11 + LDR"] --> H2["ESP32"] --> H3["Arduino IoT Cloud"]
    end
```

</details>

---

### Papers & Presentations

| Title | Format | Focus |
| :--- | :--- | :--- |
| **LLM-OS: Reimagining Resource Management for the AI Era** | Poster + Slide Deck | AIOS kernel architecture, hierarchical context memory, agent scheduling |
| **AquaWatch** | IEEE Paper + Poster | Real-time IoT water quality telemetry |
| **Smart E-Waste Sorting System** | IEEE Paper | Multi-sensor automated material classification |
| **Smart Thermal Management** | Conference Poster | Closed-loop PWM thermal control |
| **Temperature / Humidity Tracker** | Conference Poster | Cloud-connected environmental monitoring |

---

### Roadmap

```mermaid
%%{init: {'theme':'base','themeVariables':{'cScale0':'#161B22','cScale1':'#1F2937','cScale2':'#0C4A6E','cScaleLabel0':'#E6EDF3','cScaleLabel1':'#E6EDF3','cScaleLabel2':'#E6EDF3'}}}%%
timeline
    title CSE-AIML to Edge AI & Hardware
    Now : C, C++, Java fundamentals
        : scikit-learn project ladder
        : Jarvis (local AI assistant)
        : Two-year electronics curriculum
    Next : Efficient LLM inference on 6GB VRAM
         : Edge AI & TinyML on ESP32
    Target : VLSI
           : AI x Embedded Systems
```

---

### Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Languages** | ![C](https://img.shields.io/badge/C-161B22?style=flat-square&logo=c&logoColor=38BDF8) ![C++](https://img.shields.io/badge/C++-161B22?style=flat-square&logo=cplusplus&logoColor=38BDF8) ![Java](https://img.shields.io/badge/Java-161B22?style=flat-square&logo=openjdk&logoColor=38BDF8) ![Python](https://img.shields.io/badge/Python-161B22?style=flat-square&logo=python&logoColor=38BDF8) |
| **AI & Local ML** | ![Ollama](https://img.shields.io/badge/Ollama-161B22?style=flat-square&logo=ollama&logoColor=38BDF8) ![scikit-learn](https://img.shields.io/badge/scikit--learn-161B22?style=flat-square&logo=scikitlearn&logoColor=38BDF8) ![ChromaDB](https://img.shields.io/badge/ChromaDB-161B22?style=flat-square&logoColor=38BDF8) ![Whisper](https://img.shields.io/badge/faster--whisper-161B22?style=flat-square&logoColor=38BDF8) |
| **Embedded & Cloud** | ![Espressif](https://img.shields.io/badge/ESP32-161B22?style=flat-square&logo=espressif&logoColor=38BDF8) ![Arduino](https://img.shields.io/badge/Arduino-161B22?style=flat-square&logo=arduino&logoColor=38BDF8) ![EasyEDA](https://img.shields.io/badge/EasyEDA-161B22?style=flat-square&logoColor=38BDF8) ![Firebase](https://img.shields.io/badge/Firebase-161B22?style=flat-square&logo=firebase&logoColor=38BDF8) |
| **Tools & Off-Clock** | ![Git](https://img.shields.io/badge/Git-161B22?style=flat-square&logo=git&logoColor=8B949E) ![VS Code](https://img.shields.io/badge/VS%20Code-161B22?style=flat-square&logo=visualstudiocode&logoColor=8B949E) ![Steam](https://img.shields.io/badge/Steam-161B22?style=flat-square&logo=steam&logoColor=8B949E) ![Epic Games](https://img.shields.io/badge/Epic%20Games-161B22?style=flat-square&logo=epicgames&logoColor=8B949E) ![Riot Games](https://img.shields.io/badge/Riot%20Games-161B22?style=flat-square&logo=riotgames&logoColor=8B949E) |

---

### GitHub Activity

<div align="center">

<img height="175" src="https://github-readme-stats.shion.dev/api?username=SinghAgambir05&show_icons=true&bg_color=00000000&border_color=30363D&title_color=38BDF8&text_color=C9D1D9&icon_color=38BDF8&include_all_commits=false&count_private=false" />
<img height="175" src="https://github-readme-stats.shion.dev/api/top-langs/?username=SinghAgambir05&layout=compact&bg_color=00000000&border_color=30363D&title_color=38BDF8&text_color=C9D1D9" />

<br/>

<img src="https://streak-stats.demolab.com/?user=SinghAgambir05&background=00000000&border_color=30363D&ring=38BDF8&fire=38BDF8&currStreakLabel=38BDF8&sideLabels=C9D1D9&dates=8B949E&currStreakNum=E6EDF3&sideNums=E6EDF3" />

<br/><br/>

<img src="https://github-readme-activity-graph.vercel.app/graph?username=SinghAgambir05&bg_color=00000000&color=8B949E&line=38BDF8&point=E6EDF3&area=true&area_color=38BDF8&hide_border=true" width="100%" />

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/SinghAgambir05/SinghAgambir05/output/github-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/SinghAgambir05/SinghAgambir05/output/github-snake.svg" />
  <img alt="contribution snake" src="https://raw.githubusercontent.com/SinghAgambir05/SinghAgambir05/output/github-snake-dark.svg" />
</picture>

</div>

---

<div align="center">
  <sub>Working on Edge AI, TinyML, custom PCBs, or squeezing LLMs onto 6GB VRAM? <a href="mailto:kingagambir@gmail.com">Reach out.</a></sub>
</div>
