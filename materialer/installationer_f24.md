<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../script.js"></script> 

# Installationer
Herunder finder du en beskrivelse af hvad og hvordan du skal installere det software vi skal arbejde med resten af dette semester.

Du skal installere ubuntu linux på din computer, ikke som en erstatning for dit nuværende styrresystem, men i en "container" inde i dit styrresystem.

Du kan konceptionelt se det du skal gøre som værende:

1. installere en "sandkasse" på din egen computer.
2. installere linux i denne sandkasse (det kan du se som sandet).

Så du kommer til at have en computer installeret inde i din computer - lidt ligesom filmen "inception" (hvis du har set den).

## 1. Docker Desktop
Det første du skal installere er programmet **Docker Desktop** (dette er din sandkasse).

### Download og installer Docker Desktop
Naviger til **[Dockers website](https://www.docker.com/)** og download og installer Docker Desktop.

#### Mac 
Har du en Mac plejer dette trin at køre lige ud af landevejen.    
Det eneste du skal huske er at vælge den Docker version der svare til din CPU (intel/M1,M2)

#### Windows tutorials
På Windows kan der i nogle tilfælde være lidt udfordringer med at installere Docker desktop.
Så det kan være en god ide at følge disse to tutorials:

<iframe width="560" height="315" src="https://www.youtube.com/embed/eId6K8d0v6o?si=3iVA1XTlNrjmBn9K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


<iframe width="560" height="315" src="https://www.youtube.com/embed/fnjs4W91Olc?si=DYw1qXDC060GW8T-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

##### Windows Home 10
Hvis du skulle have Windows 10 Home på din computer skal du følge denne fremgangsmåde som er beskrevet her:
**[Install Docker Desktop on Windows Home](https://docs.docker.com/docker-for-windows/install-windows-home/)**

#### Check om alt er installeret korrekt
I din terminal, gitbash eller powershell skal du skrive ```docker --version``` hvilket skulle give dig følgende resultat:  

````
	$ docker --version
	Docker version 20.10.20, build 9fdeb9c
````
Versionsnummeret kan variere, men hvis du ikke kan se dette eller ser en fejl, har du ikke fået installeret Docker Desktop korrekt, og skal derfor gentage processen.


### Download og Kør dit linux OS
Du skal nu downloade den version af linux som vi kommer til at bruge fremover.

Detter sker gennem din Terminal (mac), eller Powershell (win).
 
##### Windows
Hvis du har Windows på din computer skal du åbne programmet **PowerShell**. Dette gøres nemmest ved at skrive "Powershell" i søgefeltet nederst til venstre på skærmen. 

![](../img/desktop/powershell.png)

##### Mac
Hvis du har Mac skal du åbne programmet **Terminal**. Dette gøres nemmest ved at søge via **spotlight**.

![](../img/desktop/desktop_02_04.png) 

Skriv denne kommando i din terminal/powershell.

```
    mkdir ~/webtop
```
Det laver en mappe med navnet "webtop" i din user mappe på din computer.    

Copy/paste herefter denne kommando i din terminal for at downloade og starte Ubuntu (Linux):

<!--
```
    docker run -d \
  --name=webtop-ubuntu-mate \
  --security-opt seccomp=unconfined '#optional' \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Etc/UTC \
  -e SUBFOLDER=/ '#optional' \
  -e TITLE=Teknologi '#optional' \
  -p 3000:3000 \
  -p 3001:3001 \
  -v ~/webtop:/config \
  -v /var/run/docker.sock:/var/run/docker.sock '#optional' \
  --shm-size="1gb" '#optional' \
  --restart unless-stopped \
  lscr.io/linuxserver/webtop:ubuntu-mate
```
-->

```
  docker run -d --name=webtop-ubuntu-mate --security-opt seccomp=unconfined  -e PUID=1000 -e PGID=1000 -e TZ=Etc/UTC -e SUBFOLDER=/  -e TITLE=Teknologi  -p 3000:3000 -p 3001:3001 -v ~/webtop:/config -v /var/run/docker.sock:/var/run/docker.sock  --shm-size="1gb"  --restart unless-stopped lscr.io/linuxserver/webtop:ubuntu-mate
```

Det tager ca. et minuts tid. Når det er sket skal du åbne Docker desktop og gå til Containers menupunktet. Her skulle du gerne kunne se noget lignende dette. 

![](../img/desktop/desktop_02_01.png) 


---

Under actions vælg "Open with browser"

![](../img/desktop/desktop_02_02.png) 

Nu åbner dette interface i din browser:

![](../img/desktop/desktop_02_03.png) 

Hvis det ikke sker automatisk kan du selv åbne din browser og skriv ```localhost:3000```.     

Det er den linux installation du kommer til at arbejde med i undervisningen. Leg lidt med det inden vi mødes. 

### Slet din linux installation. 

Hvis du skulle få brug for det kan du nemt slette linux instancen under "actions" i din Docker Desktop.     
Gå derefter til din rodmappe ( ~ ) og tøm ```webtop``` mappen. Nu har du slettet din linux instans.
   
Herefter kører du ```docker run``` kommandoen igen for at installere en ny og frisk instans.

### Password
Hvis din skærm går i pause mode, skal du indtaste et password for at logge ind. Dette password er **abc**









