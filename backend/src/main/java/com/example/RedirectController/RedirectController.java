package com.example.RedirectController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

@RestController
@RequestMapping("/api")
public class RedirectController {
    @GetMapping("/")
    public RedirectView redirectToNextJS() {
        String nextJsUrl = "http://localhost:3000"; 
        return new RedirectView(nextJsUrl);
}

}
