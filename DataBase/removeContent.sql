/* Delete Text Message*/
delete from TextMessage
/*grup asistan de�erlerini sil*/
DELETE GroupAsistance FROM GroupAsistance ga inner join Asistance a on ga.asistanceFk = a.asistanceId
/*asistanlar� sil*/
Delete from Asistance

/*User group sil*/
delete UsersGroup from Users u inner join UsersGroup ug on ug.usersFk= u.userId

/* Group sil */
delete from Groups

/*Manager sil*/
delete from Manager

/*User sil*/
delete from Users
