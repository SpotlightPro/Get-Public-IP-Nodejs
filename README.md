# Get Server IP

The script is designed to run on a local machine and provide the public IP address of that machine on a web page accessible at http://"hostname":"port"/.

The script checks if the IP address has changed before starting the server, and if it has, it updates the ip.txt file and the web page accordingly.

Starts by importing the required modules: fs for file system operations, http for creating an HTTP server, and os for obtaining the hostname of the local machine.

Then defines a function called getPublicIP that uses the http module to make a request to a public IP address lookup service. The function returns a promise that resolves to the public IP address of the local machine.

Then defines a function called updateIP that reads the current IP address from the ip.txt file, compares it to the public IP address obtained from the getPublicIP function, and updates the ip.txt file and the web page if the IP address has changed.

Then creates an HTTP server that listens on the specified port number and serves the web page. The web page displays the public IP address of the local machine.

Finally, the script calls the updateIP function to update the IP address if necessary, and then starts the HTTP server.
