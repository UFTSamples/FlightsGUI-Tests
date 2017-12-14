'launch app
SystemUtil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

If WpfWindow("HPE MyFlight Sample Applicatio").Exist(1) Then
	Reporter.ReportEvent micPass, Environment("ActionName"), " Application Opened"
	Else
	Reporter.ReportEvent micFail, Environment("ActionName"), "Application has not opend after 2 sec"
End If
