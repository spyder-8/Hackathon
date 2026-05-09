package kenthackit.arg.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return User.builder()
            .username("user")
            .password("$2a$12$D8xK492EVZRDjr..ZPTiEOkuciCGnJlACwltFMPyN9ONI8gqSPAfq")
            .build();
    }
}
