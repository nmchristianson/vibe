INSERT INTO user (userName)
VALUES
('RonaldFir', 'VirginiaWoolf', 'CharlesLeRoi');

INSERT INTO mood (title, color)
VALUES
('joyful, happy, relaxed', 'pink'),
('sad, lonely, depressed', 'blue'),
('productive, energetic, active', 'green'),
('sick, tired, lazy', 'yellow'),
('average, normal, good', 'orange'),
('angry, anxious, frustrated', 'red');

INSERT INTO journal (journalNote, userID, MoodID)
VALUES
('Today was great for me', 1, 1),
('I was not productive today', 2, 4),
('I am so angry with my brother', 3, 6);

INSERT INTO question (questionText)
VALUES
('What is the reason behind your mood today?'),
('What can you do to make you feel better?'),
('What do you want the most today?');

INSERT INTO answer (answerText, questionID, userID)
VALUES
('I talked to one of my school friends', 1, 1),
('I should exercise everyday', 2, 2),
('I was not on time for my meeting', 1, 3);