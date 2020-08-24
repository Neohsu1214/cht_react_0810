package com.chtti.fullstack.memo.Backend1_gradle;

import com.chtti.fullstack.memo.Backend1_gradle.model.Project;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ProjectTest {
    private static final Logger LOGGER =
            LoggerFactory.getLogger(ProjectTest.class.getSimpleName());
    /**
     * 在 method 上加上 @Test 後，及變成一個可執行的 test method
     * 不同於舊版的 UnitTest，此宣告方式為新版本JUnit的 jupiter 寫法
     */
    @Test
    void test1() {
        Project p1  = new Project();
        Project p2 = new Project();
        Project p3 = p1; // p3與p1指向同一個記憶體
        //System.out.println("Hello Test!"); // 會有風險告警，必須改用 Logger 實作訊息輸出！
        //LOGGER.info("Hello Test again!"); // OK!
        LOGGER.info("p1 = {}", p1); // 輸出會是物件記憶體資訊，再到Project上加上@Data後，輸出會更易讀！
        LOGGER.info("p2 = {}", p2);
        // ==: shallow compare(比較指標), equals: deep compare(比較資料)
        LOGGER.info("p1==p2 ==>{}, p1.equals(p2) ==>{}", p1 == p2, p1.equals(p2)); // fasle, true
        LOGGER.info("p1==p3 ==>{}, p1.equals(p3) ==>{}", p1 == p3, p1.equals(p3)); // true, true

        p1.setProjectName("yearly_review");
        p2.setProjectName("yearly_review");
        LOGGER.info("p1==p2 ==>{}, p1.equals(p2) ==>{}", p1 == p2, p1.equals(p2)); // fasle, true
    }
}
