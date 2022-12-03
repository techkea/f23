<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="script.js"></script>

# Uninstall MySql Completely on Windows

## Step 1

Uninstall MySQL from Control Panel. To do so,

Go to Control Panel > Programs and Features > Select MySQL > Click on Uninstall.

After you have uninstalled MySQL through Add/Remove programs, you now need to remove the existing database information which includes your actual data.  If you need any of that data, be sure to back it up. Next you can delete the data directory.

## Step 2

Run Command Prompt as Administrator and execute the following command to stop and remove MySQL service.

````

	Net stop MySQL

	Sc delete MySQL

````

## Step 3

Click on Start, type in Show hidden files and folders.

Select the View tab and select Show hidden files and folders.

Now explore the following locations and delete following folders.

````

	C:\Program Files\MySQL

	C:\Program Files (x86)\MySQL

	C:\ProgramData\MySQL
````

And if exists, delete the folder from the location.

````
	C:\Users\[User-Name]\AppData\Roaming\MySQL
````

Restart your device and check the status.




_https://answers.microsoft.com/en-us/windows/forum/windows_other-windows_programs/how-to-completely-uninstall-mysql/e90e1344-7b90-4319-8b2f-77b271ae66ed_
