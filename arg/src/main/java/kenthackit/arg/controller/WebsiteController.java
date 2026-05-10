package kenthackit.arg.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.Map;

import kenthackit.arg.service.EncryptionService;

@Controller
public class WebsiteController {

    @GetMapping("/")
    public String greeting(ModelMap model) throws Exception {
        var data = EncryptionService.encrypt("https://youtu.be/6ZI0tYjUYdA");
        model.addAttribute("encrypted", data.get("ciphertext"));
        model.addAttribute("iv", data.get("iv"));
        return "greeting";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
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

    @GetMapping("/you-were-warned")
    public String youWereWarned() {
        return "you-were-warned";
    }

    @PostMapping("/check-guess")
    @ResponseBody
    public Map<String, Boolean> checkGuess(@RequestBody Map<String, String> payload) {
        String guess = payload.get("guess");
        boolean success = "https://youtu.be/6ZI0tYjUYdA".equals(guess);
        return Map.of("success", success);
        }
}
