if you are running jenkins tomcat and maven git in one server and when transfering data from jenkins to tomcat we will face permisition issue and the build will faill for that
ChatGPT said:
Your Jenkins job is failing because of this specific error:
cp: cannot stat '/opt/tomcat/webapps/WebApp.war': Permission denied
This means Jenkins doesn’t have permission to access or write to the /opt/tomcat/webapps/ directory.

✅ Solution: Grant Proper Permissions to Jenkins

Step 1: Find the Jenkins User
Jenkins typically runs as the jenkins user.

Check with:
ps aux | grep jenkins
If Jenkins is running under jenkins, proceed to give it access.

Step 2: Fix Ownership of /opt/tomcat Directory
Run this as root:

sudo chown -R jenkins:jenkins /opt/tomcat
If you only want Jenkins to access webapps folder:


sudo chown -R jenkins:jenkins /opt/tomcat/webapps
Step 3: Fix Permissions
Just to be safe:

sudo chmod -R 755 /opt/tomcat
If you want to restrict it more tightly:


sudo chmod -R 750 /opt/tomcat
Step 4: Re-run the Jenkins Job
Now your cp command should work because Jenkins can access the destination path.

🛑 Optional (If You Don’t Want to Change Permissions)
You can run the copy command with sudo, but Jenkins doesn’t have sudo by default.

You would need to allow passwordless sudo for Jenkins (not recommended for production), like:

sudo visudo

jenkins ALL=(ALL) NOPASSWD:ALL
Then change your Jenkins shell command:

sudo cp -r /var/lib/jenkins/workspace/demo-project/target/WebApp.war /opt/tomcat/webapps/

# Build Instruction


```
mvn clean package
and build the instruction .
```

# Deploy instruction

Deploy ```target/WebApp.war``` on Tomcat properly for better experience.

