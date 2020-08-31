package com.chtti.fullstack.memo.Backend1_gradle;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching // 啟用 cache 降低 DB 存取次數 (要先設定 cache 相關參數才能使用喔！)
@SpringBootApplication
public class Backend1GradleApplication {

	public static void main(String[] args) {
		SpringApplication.run(Backend1GradleApplication.class, args);
	}

}
