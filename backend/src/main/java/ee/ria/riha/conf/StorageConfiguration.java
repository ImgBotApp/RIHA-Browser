package ee.ria.riha.conf;

import ee.ria.riha.domain.InfoSystemRepository;
import ee.ria.riha.domain.RihaStorageInfoSystemRepository;
import ee.ria.riha.storage.client.StorageClient;
import ee.ria.riha.storage.domain.CommentRepository;
import ee.ria.riha.storage.domain.FileRepository;
import ee.ria.riha.storage.domain.MainResourceRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class StorageConfiguration {

    @Bean
    public StorageClient getStorageClient(RestTemplate restTemplate, ApplicationProperties applicationProperties) {
        return new StorageClient(restTemplate, applicationProperties.getStorageClient().getBaseUrl());
    }

    @Bean
    public MainResourceRepository mainResourceRepository(StorageClient storageClient) {
        return new MainResourceRepository(storageClient);
    }

    @Bean
    public InfoSystemRepository infoSystemRepository(MainResourceRepository mainResourceRepository) {
        return new RihaStorageInfoSystemRepository(mainResourceRepository);
    }

    @Bean
    public CommentRepository commentRepository(StorageClient storageClient) {
        return new CommentRepository(storageClient);
    }

    @Bean
    public FileRepository fileRepository(RestTemplate restTemplate, ApplicationProperties applicationProperties) {
        return new FileRepository(restTemplate, applicationProperties.getStorageClient().getBaseUrl());
    }
}
