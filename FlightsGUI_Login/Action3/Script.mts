'fill in the login details
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "John"
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set "HP"
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click

'use a checkpoint to see if login has happen
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("John Smith").Check CheckPoint("John Smith") @@ hightlight id_;_1926055296_;_script infofile_;_ZIP::ssf1.xml_;_

