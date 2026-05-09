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

    @GetMapping("/stop")
    public String stop() {
        return "stop";
    }

    @GetMapping("/doing")
    public String doing() {
        return "doing";
    }

    @GetMapping("/what")
    public String what() {
        return "what";
    }

    @GetMapping("/youre")
    public String youre() {
        return "youre";
    }

    @GetMapping("/told")
    public String told() {
        return "told";
    }

    @GetMapping("/do")
    public String doPage() {
        return "do";
    }

    @GetMapping("/you")
    public String you() {
        return "you";
    }

    @GetMapping("/know")
    public String know() {
        return "know";
    }

    @GetMapping("/what-damage")
    public String whatDamage() {
        return "what-damage";
    }

    @GetMapping("/youve")
    public String youve() {
        return "youve";
    }

    @GetMapping("/done")
    public String done() {
        return "done";
    }

    @GetMapping("/black")
    public String black() {
        return "black";
    }
}
