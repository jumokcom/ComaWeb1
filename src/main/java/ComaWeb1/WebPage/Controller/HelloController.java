package ComaWeb1.WebPage.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/api/hello")
    public String hello() {
        return "제발제발제발제발제발제발제발제발 간절하면 이루어진다";
    }
}