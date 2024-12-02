package ComaWeb1.WebPage.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConnectionController {

    @GetMapping("/api/connection-status")
    public String getConnectionStatus() {
        return "Spring Boot + React 연결 성공";
    }
}