
'close the application
WpfWindow("HPE MyFlight Sample Applicatio").Close

'check that application closed
If Not WpfWindow("HPE MyFlight Sample Applicatio").Exist(1) Then
	Reporter.ReportEvent micPass, Environment("ActionName"), " Application Closed"
	Else
	Reporter.ReportEvent micFail, Environment("ActionName"), "Application not closed after 2 sec"
End If



