<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../script.js"></script>

# Azure CheatSheet
Det følgende er de kommandoer vi har brugt for at arbejde med jeres Linux maskine på Azure.

Feks. hvordan i eksekverer en jar file (web app) på maskinen, og hvordan i installere programmer på maskinen. 

## Update og Upgrade
Som det første skal i updatere maskinen.

```
    sudo apt update
    sudo apt upgrade
```
 
## Installering af openjdk (version 17)
For at kunne installere nyere versioner af openjdk skal i først udføre følgende kommandoer

```
    sudo add-apt-repository ppa:openjdk-r/ppa
    sudo apt update
    sudo apt install openjdk-17-jdk

```

### hvis du vil installere openjdk 19
Hvis dine projekter er oprettet med jdk19 skal du udføre følgende kommandoer:

```
    wget https://download.oracle.com/java/19/latest/jdk-19_linux-x64_bin.deb
    sudo apt-get -qqy install ./jdk-19_linux-x64_bin.deb
    sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/jdk-19/bin/java 1919

```

## Eksekver din jar fil 
Du kan eksekvere en JAR-fil i detached mode i terminalen, fx en Spring Boot-applikation. Du kan gøre dette ved at bruge følgende kommando:

````
	nohup java -jar <jar filnavn> &
````

Med dette vil JAR-filen blive eksekveret i baggrunden, selv efter at du har lukket terminalen. "nohup" forhindrer, at procesen bliver annulleret, når terminalen lukkes, og "&" begynder at køre procesen i baggrunden.

Husk, at du muligvis skal angive den fuld sti til JAR-filen, hvis den ikke befinder sig i den aktuelle arbejdsmappe.


## Stop din web app 
For at stoppe eksekveringen af JAR-filen, der kører i baggrunden, skal du først finde PID'en (proces-ID) for den relevante proces. Du kan gøre dette ved at bruge følgende kommando:

```
	ps -ef | grep java

```

Dette vil vise en liste over alle kørende Java-processer, inklusive den, der kører din JAR-fil. Find linjen, der matcher din JAR-fil, og noter PID'en, der er anivet i begyndelsen af linjen.

Derefter kan du stoppe processen ved at bruge følgende kommando:

```
	kill <PID>
```

Hvor <PID> er PID'en for den relevante proces.

Dette vil sende en SIGKILL-signal til processen, hvilket vil afslutte den øjeblikkeligt. Hvis processen ikke reagerer på SIGKILL-signalet, kan du prøve at sende et SIGTERM-signal i stedet ved at bruge følgende kommando:

```
	kill -15 <PID>
```
Dette giver processen mulighed for at lukke ned ordentligt.


## Start docker ved start af din virtuelle maskine

TODO: Startup script

## Start app.jar ved start af din virtuelle maskine
Du kan automatisk eksekvere et Java-script på en Ubuntu-maskine ved at oprette en ny opstartstjeneste. 

Her er de overordnede trin:

1. Opret en ny fil med navnet "app.service" i mappen "/etc/systemd/system/"

2. Tilføj følgende indhold til filen:

```
	[Unit]
	Description=My App Service

	[Service]
	ExecStart=/usr/bin/java -jar /path/to/app.jar
	User=<user_to_run_as>

	[Install]
	WantedBy=multi-user.target
```

3. Erstat stien til app.jar med den rigtige sti til din Java-applikation.

4. Erstat <user_to_run_as> med brugernavnet for den bruger, som tjenesten skal køre som.

5. Gem filen og lav den eksekverbare med kommanden:

```
	sudo chmod 644 /etc/systemd/system/app.service

```
6. Genstart systemd med kommanden:

```

	sudo systemctl daemon-reload
```
7. Aktiver tjenesten med kommanden:

```
	sudo systemctl enable app.service
```


Når du starter din Ubuntu-maskine, vil Java-applikationen blive startet automatisk via systemd-tjenesten. Du kan overvåge tjenesten med kommanden 

```
	systemctl status app.service
```

