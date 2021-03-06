package ee.ria.riha.domain.model;

/**
 * @author Valentin Suhnjov
 */
public enum IssueEntityType {
    /**
     * Issue entity discriminator
     */
    ISSUE,

    /**
     * Issue comment entity discriminator
     */
    ISSUE_COMMENT,

    /**
     * Issue event entity discriminator
     */
    ISSUE_EVENT;
}
