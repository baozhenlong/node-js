CREATE DATABASE egg;

USE egg;

CREATE TABLE article(
    id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    img LONGTEXT DEFAULT NULL COMMENT '缩略图',
    title varchar(80) DEFAULT NULL COMMENT '标题',
    createTime timestamp DEFAULT NULL COMMENT '发布时间'
);

INSERT INTO article (img, title)VALUES('https://images.unsplash.com/photo-1623055918989-b4b50c7bc1a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', '城市');
