package ComaWeb1.WebPage.Controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping(value = "/{path:[^\\.]*}") // 모든 경로를 React로 전달
    public String forward() {
        return "forward:/";
    }
}

