package kenthackit.arg.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;

import kenthackit.arg.service.EncryptionService;

@Controller
public class WebsiteController {

    @GetMapping("/")
    public String greeting(ModelMap model) throws Exception {
        var data = EncryptionService.encrypt("This is a secret message");
        model.addAttribute("encrypted", data.get("ciphertext"));
        model.addAttribute("iv", data.get("iv"));
        return "greeting";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/success")
    public String success() {
        return "success";
    }
}
