-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: lyrics
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20230629024032-lyrics.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lyrics`
--

DROP TABLE IF EXISTS `lyrics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lyrics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `lyric` text NOT NULL,
  `annotations` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lyrics`
--

LOCK TABLES `lyrics` WRITE;
/*!40000 ALTER TABLE `lyrics` DISABLE KEYS */;
INSERT INTO `lyrics` VALUES (1,'New World','空を越えて 海を越えて\n小さな不安 希望に變えて\n步き出した この世界で\nどんな出會いを探しにいこう\n想い崩れそうでも　ざわめく心抑える\n君の聲が包む未來(さき)信じて\n僕らの旅はまだ始まったばかり\nどれだけの夢を絆をつないでいこう\n集まる心は戰う強さになるよ\n闇を越えた明日のその先へ\n\n夜を越えて朝を越えて\n君の聲が 聞こえなくなって\n振り返らず強がってた\n胸の奧には輝く軌跡\nいつの間にか增えてた重なり響く足音\n支えてくれる想い信じて\n僕らの旅は描き始めたスト一リ一\nどれだけの夢を絆を綴っていこう\n僕らのエピロ一グは遙か遠いペ一ジ\nもう行かなくちゃ明日のその先へ\n\n少しずつ聞こえてきた歌\n束ねたコ一ラスは強く\n世界を鮮やかに塗り替えていく魔法のよう\nバラバラに滲んでた言葉\nもう溶かされはしないよ\nどんなにつらいことも\n優しい光に變えよう\n\n僕らの旅はまだ始まったばかり\nどれだけの夢を絆をつないでいこう\n集まる心は戰う強さになる!\n淚は昨日の景色\n僕らの旅は描き始めたスト一リ一\nどれだけの夢を絆を綴っていこう\n僕らのエピロ一グは遙か遠いペ一ジ\nもう行かなくちゃ 明日のその先へ','Digimon Xros Wars OP 2'),(2,'Butter-fly','ゴキゲンな蝶になって\nきらめく風に乗って\n今すぐ キミに会いに行こう\n余計な事なんて 忘れた方がマシさ\nこれ以上 シャレてる時間はない\n\n何が wow, wow, wow, wow,\nwow\nこの空に届くのだろう\nだけど wow, wow, wow, wow,\nwow\n明日の予定もわからない\n\n無限大な夢のあとの\n何もない世の中じゃ\nそうさ愛しい\n想いも負けそうになるけど\nStay しがちなイメージだらけの\n頼りない翼でも\nきっと飛べるさ on my love\n\nウカレタ蝶になって\n一途な風に乗って\nどこまでも キミに会いに行こう\n曖昧な言葉って 意外に便利だって\n叫んでる ヒットソング聴きながら\n\n何が wow, wow, wow, wow,\nwow\nこの街に響くのだろう\nだけど wow, wow, wow, wow,\nwow\n期待してても仕方ない\n\n無限大な夢のあとの\nやるせない世の中じゃ\nそうさ常識\nはずれも悪くはないかな\nStay しそうなイメージを染めた\nぎこちない翼でも\nきっと飛べるさ on my love\n\n無限大な夢のあとの\n何もない世の中じゃ\nそうさ愛しい\n想いも負けそうになるけど\nStay しがちなイメージだらけの\n頼りない翼でも\nきっと飛べるさ oh yeah\n\n無限大な夢のあとの\nやるせない世の中じゃ\nそうさ常識\nはずれも悪くはないかな\nStay しそうなイメージを染めた\nぎこちない翼でも\nきっと飛べるさ on my love','Digimon Adventure\n\n\nanotação butter-fly 2'),(3,'Butter-fly 2','ゴキゲンな蝶になって\nきらめく風に乗って\n今すぐ キミに会いに行こう\n余計な事なんて 忘れた方がマシさ\nこれ以上 シャレてる時間はない\n\n何が wow, wow, wow, wow,\nwow\nこの空に届くのだろう\nだけど wow, wow, wow, wow,\nwow\n明日の予定もわからない\n\n無限大な夢のあとの\n何もない世の中じゃ\nそうさ愛しい\n想いも負けそうになるけど\nStay しがちなイメージだらけの\n頼りない翼でも\nきっと飛べるさ on my love\n\nウカレタ蝶になって\n一途な風に乗って\nどこまでも キミに会いに行こう\n曖昧な言葉って 意外に便利だって\n叫んでる ヒットソング聴きながら\n\n何が wow, wow, wow, wow,\nwow\nこの街に響くのだろう\nだけど wow, wow, wow, wow,\nwow\n期待してても仕方ない\n\n無限大な夢のあとの\nやるせない世の中じゃ\nそうさ常識\nはずれも悪くはないかな\nStay しそうなイメージを染めた\nぎこちない翼でも\nきっと飛べるさ on my love\n\n無限大な夢のあとの\n何もない世の中じゃ\nそうさ愛しい\n想いも負けそうになるけど\nStay しがちなイメージだらけの\n頼りない翼でも\nきっと飛べるさ oh yeah\n\n無限大な夢のあとの\nやるせない世の中じゃ\nそうさ常識\nはずれも悪くはないかな\nStay しそうなイメージを染めた\nぎこちない翼でも\nきっと飛べるさ on my love','Digimon Adventure\n\nTESTE xablau'),(4,'Seiza ni Naretara','もうすぐ時計は6時\nもうそこに一番星\n影を踏んで 夜に紛れたくなる帰り道\nどんなに探してみても\n一つしかない星\n何億光年 離れたところからあんなに輝く\n\nいいな 君は みんなから愛されて\n「いいや 僕は ずっと一人きりさ」\n\n君と集まって星座になれたら\n星降る夜 一瞬の願い事\nきらめいて ゆらめいて 震えてるシグナル\n君と集まって星座になれたら\n空見上げて 指を差されるような\nつないだ線 解かないで\n僕がどんなに眩しくても\n\nもうすぐ時計は8時\n夜空に満天の星\n何億光年 離れたところにはもうないかもしれない\n\n月が綺麗で 泣きそうになるのは\nいつの日にか 別れが来るから\n\n君と集まって星座になれたら\n彗星みたい 流れるひとりごと\n消えていく 残像は 真夜中のプリズム\n君と集まって星座になれたら\n切なる願い 誰かに届いたら\n変われるかな 夜の淵を\nなぞるような こんな僕でも\n\n遥か彼方 僕らは出会ってしまった\nカルマだから 何度も出会ってしまうよ\n雲の隙間で\n\n君と集まって星座になれたら\n夜広げて 描こう絵空事\n暗闇を 照らすような 満月じゃなくても\nだから集まって星座になりたい\n色とりどりの光 放つような\nつないだ線 解かないよ\n君がどんなに眩しくても', '影 - かげ - shadow');
/*!40000 ALTER TABLE `lyrics` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-22  3:32:39
