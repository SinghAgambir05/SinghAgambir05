<div align="center">

![Header](https://capsule-render.vercel.app/api?type=venom&color=0:0f3460,50:1a1a2e,100:00C4CC&height=260&section=header&text=Agambir%20Singh%20Jammu&fontSize=52&fontColor=ffffff&animation=twinkling&fontAlignY=38&desc=Building%20AI%20that%20runs%20local%20%7C%20Embedded%20Systems%20%7C%20CSE-AIML%20%40%20SRM&descAlignY=60&descSize=18)

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&duration=3000&pause=800&color=00C4CC&center=true&vCenter=true&multiline=false&repeat=true&width=720&height=50&lines=Building+Jarvis%2C+a+fully-local+AI+assistant+%F0%9F%A7%A0;Designing+PCBs+for+ESP32-based+IoT+systems+%E2%9A%A1;Running+LLMs+on+6GB+VRAM+%F0%9F%94%A5;Edge+AI+%2F+TinyML+%E2%86%92+VLSI+%F0%9F%9A%80;2nd-year+CSE-AIML+student+%40+SRMIST+%F0%9F%8E%93" alt="Typing SVG" />
</a>

<br/>

![Profile Views](https://komarev.com/ghpvc/?username=SinghAgambir05&label=PROFILE%20VIEWS&color=00C4CC&style=for-the-badge)
![Followers](https://img.shields.io/github/followers/SinghAgambir05?label=FOLLOWERS&style=for-the-badge&logo=github&color=0f3460&logoColor=white)
![Stars](https://img.shields.io/github/stars/SinghAgambir05?label=STARS&style=for-the-badge&logo=github&color=0f3460&logoColor=white)
![Repos](https://img.shields.io/github/search/SinghAgambir05/SinghAgambir05?label=&style=for-the-badge&color=0f3460&logo=github&logoColor=white&query=user%3ASinghAgambir05&suffix=%20repos)

<a href="mailto:kingagambir@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/agambir-singh-jammu-4204212b9/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
<a href="https://instagram.com/agam_singhj"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"/></a>
<a href="https://pinterest.com/SinghAsmoedeus"><img src="https://img.shields.io/badge/Pinterest-E60023?style=for-the-badge&logo=pinterest&logoColor=white"/></a>

</div>

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=0,2,2,5,30&height=3&section=header" width="100%"/>

## 💫 About Me

> 2nd-year B.Tech **CSE (AI & ML)** student at **SRM Institute of Science and Technology**.
> I split my time between **AI systems that run fully offline** and **embedded/IoT hardware that mostly doesn't** — the intersection is where I want to end up.

<table>
<tr>
<td width="50%" valign="top">

### 🔭 Currently working on
**Jarvis** — a locally-run AI assistant:
- 🧠 **Ollama (Qwen3:8b)** for reasoning
- 💾 **ChromaDB** for memory
- 🔊 **Piper** for TTS
- 🎙️ **faster-whisper** for STT
- 🖥️ Fully offline on an **RTX 4050 (6GB VRAM)**

Also sharpening **C, C++, and Java** fundamentals.

</td>
<td width="50%" valign="top">

### 🤝 Looking to collaborate on
**Edge AI / TinyML** — ESP32-class devices running lightweight inference instead of just streaming sensor data to the cloud.

Also open to **IoT builds** with PCB design and real-time dashboards (see AquaWatch and the e-waste sorter below).

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🆘 Looking for help with
Running **local LLM inference** efficiently on a VRAM-constrained 6GB GPU — quantization, context management, latency tuning.

Also open to feedback on my **six-peripheral ESP32 PCB shield** design.

</td>
<td width="50%" valign="top">

### 🌱 Currently learning
- C, C++, and Java alongside AI/ML coursework
- Machine learning with **scikit-learn** via a structured Python project ladder
- A self-designed **two-year electronics curriculum** heading toward **Edge AI/TinyML and VLSI**

</td>
</tr>
</table>

### 💬 Ask me about
`Fully-local AI assistants` · `ESP32-based IoT systems` · `Water quality` · `E-waste sorting` · `Thermal management` · `PCB design in EasyEDA` · `Self-studying electronics alongside a CSE-AIML degree`

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=0,2,2,5,30&height=3&section=header" width="100%"/>

## 🧠 Jarvis — Architecture

```mermaid
%%{init: {'theme':'dark','themeVariables':{'primaryColor':'#0f3460','primaryTextColor':'#ffffff','primaryBorderColor':'#00C4CC','lineColor':'#00C4CC','secondaryColor':'#1a1a2e','tertiaryColor':'#1a1a2e'}}}%%
flowchart LR
    MIC["🎙️ Voice In"] --> STT["faster-whisper<br/>STT"]
    STT --> LLM["🧠 Ollama · Qwen3:8b<br/>Reasoning"]
    LLM <--> MEM[("💾 ChromaDB<br/>Memory")]
    LLM --> TTS["Piper<br/>TTS"]
    TTS --> SPK["🔊 Voice Out"]
    GPU{{"⚡ RTX 4050 · 6GB VRAM<br/>100% offline"}} -.-> LLM
```

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=0,2,2,5,30&height=3&section=header" width="100%"/>

## 🚀 Featured Projects

<table>
<tr>
<td width="50%" valign="top">

### 💧 AquaWatch
**IoT Smart Water Quality Monitoring System**

ESP32 + TDS sensor + Firebase with a live web dashboard.

`ESP32` `TDS Sensor` `Firebase` `Web Dashboard`

📄 IEEE paper + conference poster

</td>
<td width="50%" valign="top">

### ♻️ Smart E-Waste Sorting System

ESP32 with a load cell, proximity sensor, and conductivity probes to auto-sort waste by material, on a custom PCB shield.

`ESP32` `Load Cell` `Proximity` `Conductivity` `PCB`

📄 IEEE paper with three classmates

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🔌 Custom ESP32 Sensor Shield (PCB)

Six-peripheral shield with a dual power rail, designed in **EasyEDA** to standardize the sensor stack across my IoT projects.

`EasyEDA` `ESP32` `Dual Power Rail`

</td>
<td width="50%" valign="top">

### 🌡️ Smart Thermal Management System

Arduino Nano + NTC thermistor + PWM fan control via a BC547 transistor, closed-loop.

`Arduino Nano` `NTC` `PWM` `BC547`

📄 Conference poster

</td>
</tr>
<tr>
<td colspan="2" valign="top">

### 📡 Live Temperature & Humidity Tracking System

ESP32 + DHT11 + LDR streaming to Arduino IoT Cloud for remote monitoring.

`ESP32` `DHT11` `LDR` `Arduino IoT Cloud` · 📄 Conference poster

</td>
</tr>
</table>

<details>
<summary><b>🔬 Click to expand — system data flows</b></summary>

<br/>

```mermaid
%%{init: {'theme':'dark','themeVariables':{'primaryColor':'#0f3460','primaryTextColor':'#ffffff','primaryBorderColor':'#00C4CC','lineColor':'#00C4CC'}}}%%
flowchart LR
    subgraph AquaWatch
        direction LR
        A1["TDS Sensor"] --> A2["ESP32"] --> A3[("Firebase")] --> A4["Live Web Dashboard"]
    end
    subgraph EWaste["Smart E-Waste Sorter"]
        direction LR
        E1["Load Cell"] --> E4["ESP32 on custom PCB shield"]
        E2["Proximity Sensor"] --> E4
        E3["Conductivity Probes"] --> E4
        E4 --> E5["Auto-sort by material"]
    end
    subgraph Thermal["Smart Thermal Management"]
        direction LR
        T1["NTC Thermistor"] --> T2["Arduino Nano"] --> T3["PWM via BC547"] --> T4["Fan"]
        T4 -. "closed loop" .-> T1
    end
    subgraph TempHum["Temp & Humidity Tracker"]
        direction LR
        H1["DHT11 + LDR"] --> H2["ESP32"] --> H3["Arduino IoT Cloud"]
    end
```

</details>

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=0,2,2,5,30&height=3&section=header" width="100%"/>

## 📄 Papers & Presentations

| 📑 Work | 🏷️ Type |
|:--|:--|
| **AquaWatch** | IEEE-format paper · Conference poster |
| **Smart E-Waste Sorting System** | IEEE-format paper |
| **Smart Thermal Management** | Conference poster |
| **Temperature / Humidity Tracker** | Conference poster |
| **LLM-OS: Reimagining Resource Management for the AI Era** | Class presentation poster + slide deck — AIOS kernel architecture, hierarchical context memory management, agent scheduling |

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=0,2,2,5,30&height=3&section=header" width="100%"/>

## 🗺️ Roadmap

```mermaid
%%{init: {'theme':'dark','themeVariables':{'cScale0':'#0f3460','cScale1':'#16a085','cScale2':'#00C4CC','cScaleLabel0':'#ffffff','cScaleLabel1':'#ffffff','cScaleLabel2':'#0b0b14'}}}%%
timeline
    title From CSE-AIML to Edge AI
    Now : C, C++, Java fundamentals
        : scikit-learn project ladder
        : Jarvis, fully-local AI assistant
        : Two-year electronics curriculum
    Next : Efficient LLM inference on 6GB VRAM
         : Edge AI / TinyML on ESP32
    Goal : VLSI
         : AI x Embedded intersection
```

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=0,2,2,5,30&height=3&section=header" width="100%"/>

## 💻 Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=c,cpp,java,py,firebase,arduino,git,github,vscode&theme=dark&perline=9" alt="skills"/>

<br/><br/>

![C](https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white)
![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Python](https://img.shields.io/badge/python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)
![Ollama](https://img.shields.io/badge/Ollama-000000?style=for-the-badge&logo=ollama&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![Arduino](https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white)
![Espressif (ESP32)](https://img.shields.io/badge/Espressif-E7352C?style=for-the-badge&logo=espressif&logoColor=white)

</div>

## 🎮 Also Into

<div align="center">

![Steam](https://img.shields.io/badge/steam-%23000000.svg?style=for-the-badge&logo=steam&logoColor=white)
![Epic Games](https://img.shields.io/badge/epicgames-%23313131.svg?style=for-the-badge&logo=epicgames&logoColor=white)
![Riot Games](https://img.shields.io/badge/riotgames-D32936.svg?style=for-the-badge&logo=riotgames&logoColor=white)

</div>

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=0,2,2,5,30&height=3&section=header" width="100%"/>

## 📊 GitHub Stats

<div align="center">

<img height="180" src="https://github-readme-stats.shion.dev/api?username=SinghAgambir05&theme=radical&hide_border=true&include_all_commits=false&count_private=false" />
<img height="180" src="https://github-readme-stats.shion.dev/api/top-langs/?username=SinghAgambir05&theme=radical&hide_border=true&layout=compact" />

<br/>

<img src="https://streak-stats.demolab.com/?user=SinghAgambir05&theme=radical&hide_border=true" />

<br/>

### 📈 Contribution Graph

<img src="https://github-readme-activity-graph.vercel.app/graph?username=SinghAgambir05&theme=react-dark&hide_border=true&bg_color=0d1117&color=00C4CC&line=0f3460&point=ffffff&area=true&area_color=0f3460" width="100%" />

### 🐍 Contribution Snake

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/SinghAgambir05/SinghAgambir05/output/github-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/SinghAgambir05/SinghAgambir05/output/github-snake.svg" />
  <img alt="snake" src="https://raw.githubusercontent.com/SinghAgambir05/SinghAgambir05/output/github-snake-dark.svg" />
</picture>

### 🏆 Trophies

<img src="https://github-profile-trophy.vercel.app/?username=SinghAgambir05&theme=darkhub&no-frame=true&row=1&column=6" />

### 🔝 Top Contributed Repo

<img src="https://github-contributor-stats.vercel.app/api?username=SinghAgambir05&limit=5&theme=dark&combine_all_yearly_contributions=true" />

### ✍️ Random Dev Quote

<img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical" />

</div>

<div align="center">

### 📬 Let's build something

<a href="mailto:kingagambir@gmail.com"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=1500&color=00C4CC&center=true&vCenter=true&width=520&lines=Edge+AI+%2F+TinyML+collab%3F+Ping+me.;PCB+feedback+welcome.;Local+LLM+tips+on+6GB+VRAM+%E2%80%94+please." alt="CTA" /></a>

</div>

![Footer](https://capsule-render.vercel.app/api?type=waving&color=0:00C4CC,50:0f3460,100:1a1a2e&height=140&section=footer&animation=twinkling)
